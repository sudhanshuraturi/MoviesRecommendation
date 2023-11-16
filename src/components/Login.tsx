import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "./common/Header";
import { USER_AVATAR, BACKGROUND, BROWSE_ROUTE } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";

const Login: React.FC = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useDispatch();

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    try {
      const message = checkValidData(
        email?.current?.value,
        password?.current?.value
      );
      setErrorMessage(message);

      if (message) return;

      if (email.current && password.current) {
        if (!isSignInForm) {
          // Sign Up Logic
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email?.current?.value,
            password?.current?.value
          );

          const user = userCredential.user;

          await updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: USER_AVATAR,
          });

          const {
            uid,
            email: emailFetched,
            displayName,
            photoURL,
          } = auth.currentUser || {};

          if (uid && emailFetched && displayName && photoURL) {
            dispatch(
              addUser({
                uid: uid,
                email: emailFetched,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            navigate(BROWSE_ROUTE);
          } else {
            throw new Error("Incomplete User Data");
          }
        } else {
          // Sign In Logic
          await signInWithEmailAndPassword(
            auth,
            email?.current?.value,
            password?.current?.value
          );

          navigate(BROWSE_ROUTE);
        }
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorCode = error?.code;
        const errorMessage = error?.message;
        setErrorMessage(`${errorCode} - ${errorMessage}`);
      } else {
        setErrorMessage(`Unhandled Error: ${error}`);
      }
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
    if (name.current?.value) name.current.value = "";
    if (email.current?.value) email.current.value = "";
    if (password.current?.value) password.current.value = "";
  };

  return (
    <div
      className={`bg-cover h-screen `}
      style={{ backgroundImage: `url(${BACKGROUND})` }}
    >
      <div className="bg-black h-screen w-screen bg-opacity-40">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute mx-auto right-0 left-0 my-36 p-12 bg-black text-white lg:w-1/4 sm:w-1/3 bg-opacity-90"
        >
          <h1 className="text-2xl font-bold px-2 mb-4">
            {" "}
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-2 m-2 mb-1 w-full bg-gray-700"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 m-2 mb-1 w-full bg-slate-700"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 m-2 w-full bg-slate-700"
          />
          <p className="text-red-500 text-xs mx-2 mb-2">{errorMessage}</p>
          <button
            onClick={handleButtonClick}
            className={`p-2 mx-2 bg-red-700 w-full rounded-lg`}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="px-2 mt-4 text-sm cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New User ? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
