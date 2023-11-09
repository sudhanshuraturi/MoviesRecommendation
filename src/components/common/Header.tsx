import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../../utils/constants";
import { auth } from "../../utils/firebase";
import { addUser, removeUser } from "../../redux/slices/userSlice";
import { changeLanguage } from "../../redux/slices/configSlice";
import { RootState } from "../../redux/store";
import lang from "../../utils/languageConstants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store: RootState) => store.user);
  const langKey = useSelector((store: RootState) => store.config.lang);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.uid && user?.email && user?.displayName && user?.photoURL) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const l = useLocation();
  console.log(l);
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row items-center justify-between">
      <div
        className="w-[150px] mx-auto md:mx-0"
        onClick={() => navigate("/browse")}
      >
        <img src={LOGO} alt="logo" />
      </div>
      {user && (
        <div className="flex p-2 justify-between">
          <select
            className="p-2 m-2 bg-gray-900 text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>

          {l.pathname !== "/gpt" && (
            <button
              className="py-2 px-4 mx-4 my-2 bg-red-700 text-white rounded-lg"
              onClick={() => {
                navigate("/gpt");
              }}
            >
              {lang[langKey].gptSearch}
            </button>
          )}
          <img
            className="w-12 h-10 my-auto"
            alt="usericon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white ">
            ({lang[langKey].signOut})
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
