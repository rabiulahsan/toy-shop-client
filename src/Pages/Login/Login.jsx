/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import GoogleSignIn from "../Signup/GoogleSignIn";

const Login = () => {
  const { user, signIn } = useContext(AuthContext);
  const [logInError, setLogInError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    if (user) {
      alert("At first logout");
      return;
    } else {
      signIn(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          navigate("/home");
        })
        .catch((error) => {
          console.log(error.message);
          setLogInError(error.message);
        });
    }
  };
  return (
    <div className="flex justify-center items-center bg-[#07051d] h-[710px]">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/4">
        <form onSubmit={handleLogin} className=" ">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              E-mail
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              placeholder="E-mail"
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              placeholder="Password"
            ></input>
          </div>

          <div className="text-red-400 mb-6 text-xs">
            <p>{logInError}</p>
          </div>

          <div className="cursor-pointer text-center bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded focus:outline-none focus:shadow-outline">
            <input className=" " type="submit" value="Login" />
          </div>
        </form>
        <p className="text-center text-gray-400 my-5">or</p>
        <div className="my-5 mb-10">
          <GoogleSignIn></GoogleSignIn>
        </div>
        <p className="flex flex-col text-center text-gray-500">
          Don&apos;t have an account?
          <Link to={"/signup"}>
            <span className="text-blue-800 font-semibold hover:underline">
              Register
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
