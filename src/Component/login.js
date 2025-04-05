import { useRef, useState } from "react";
import Header from "./header";
import { checkValidData } from "../utils/validator";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const [IsSingInForm, setIsSingInForm] = useState(true);
  const [ErrorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSingInForm(!IsSingInForm);
  };
  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);
    if (message) return;
    if (!IsSingInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <>
      <div>
        <Header />
        <div className="w-full h-screen object-cover absolute">
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg"></img>
        </div>
        <div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className=" absolute p-12  bg-black bg-opacity-70 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-xl"
          >
            <h1 className="text-3xl mb-4  ml-6">
              {IsSingInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!IsSingInForm && (
              <input
                type="text"
                placeholder="Full Name "
                className="pl-2 m-2 mb-4 ml-7 rounded-md bg-transparent border border-red-500 size-10/12 h-10"
              ></input>
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="p-2 m-2 mb-4 ml-7 rounded-md bg-transparent border border-red-500 size-10/12 h-10"
            ></input>
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-2 m-2
              mb-4 ml-7 rounded-md bg-transparent border border-red-500 size-10/12 h-10"
            ></input>
            <p className="text-red-700 ml-7 mb-2">{ErrorMessage}</p>
            <button
              onClick={handleButtonClick}
              className=" w-56 h-11 bg-red-600 rounded-lg ml-7"
            >
              Sign in
            </button>
            <p className="ml-8 mt-6 cursor-pointer" onClick={toggleSignInForm}>
              {IsSingInForm
                ? "New to Netflix? Sign Up Now"
                : "Already Registered? Sign Up Now.."}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
