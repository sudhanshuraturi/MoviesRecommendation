import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "./Header";
import { background } from "../utils/constants";
import { checkValidData } from "../utils/validate";

const Login: React.FC = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useDispatch();

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    // const message = checkValidData(email?.current?.value, password?.current?.value);
    // setErrorMessage(message);
    // if (message) return;
    // if (!isSignInForm) {
    //   // Sign Up Logic
    //   createUserWithEmailAndPassword(
    //     auth,
    //     email.current.value,
    //     password.current.value
    //   )
    //     .then((userCredential) => {
    //       const user = userCredential.user;
    //       updateProfile(user, {
    //         displayName: name.current.value,
    //         photoURL: USER_AVATAR,
    //       })
    //         .then(() => {
    //           const { uid, email, displayName, photoURL } = auth.currentUser;
    //           dispatch(
    //             addUser({
    //               uid: uid,
    //               email: email,
    //               displayName: displayName,
    //               photoURL: photoURL,
    //             })
    //           );
    //         })
    //         .catch((error) => {
    //           setErrorMessage(error.message);
    //         });
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       setErrorMessage(errorCode + "-" + errorMessage);
    //     });
    // } else {
    //   // Sign In Logic
    //   signInWithEmailAndPassword(
    //     auth,
    //     email.current.value,
    //     password.current.value
    //   )
    //     .then((userCredential) => {
    //       // Signed in
    //       const user = userCredential.user;
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       setErrorMessage(errorCode + "-" + errorMessage);
    //     });
    // }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div
      className={`bg-cover h-screen `}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-black h-screen w-screen bg-opacity-40">
        <Header />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute mx-auto right-0 left-0 my-36 p-12 bg-black text-white w-1/4 bg-opacity-90"
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
              className="p-4 my-4 w-full bg-gray-700"
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
          <p className="text-red-500 text-xs mx-2">{errorMessage}</p>
          <button
            onClick={handleButtonClick}
            className={`p-2 mt-${
              errorMessage === null ? 6 : 2
            } mx-2 bg-red-700 w-full rounded-lg`}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="px-2 mt-4 text-sm cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
