import { useState } from "react";
import Header from "./header";

const Login = () => {
  const [IsSingInForm, setIsSingInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSingInForm(!IsSingInForm);
  };
  return (
    <>
      <div>
        <Header />
        <div className="w-full h-screen object-cover absolute">
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg"></img>
        </div>
        <div>
          <form className=" absolute p-12  bg-black bg-opacity-70 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-xl">
            <h1 className="text-3xl mb-4  ml-6">
              {IsSingInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!IsSingInForm && (
              <input
                type="text"
                placeholder=" Full Name "
                className="pl-2 m-2 mb-4 ml-7 rounded-md bg-transparent border border-red-500 size-10/12 h-10"
              ></input>
            )}
            <input
              type="text"
              placeholder="  Email Address"
              className="p-2 m-2 mb-4 ml-7 rounded-md bg-transparent border border-red-500 size-10/12 h-10"
            ></input>
            <input
              type="password"
              placeholder="  Password"
              className="p-2 m-2
              mb-4 ml-7 rounded-md bg-transparent border border-red-500 size-10/12 h-10"
            ></input>
            <button className=" w-56 h-11 bg-red-600 rounded-lg ml-7">
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
