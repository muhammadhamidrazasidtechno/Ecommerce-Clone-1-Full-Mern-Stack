import React, { useState } from "react";
import LogoGif from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("====================================");
    console.log(data);
    console.log("====================================");
    // Handle login logic here
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <section id="login">
      <div className=" mx-auto container p-4">
        <div className="bg-white p-5 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={LogoGif} alt="" />
          </div>
          <form onSubmit={handleSubmit} className="pt-6 flex flex-col gap-2">
            <div className="grid">
              <label htmlFor="">Email : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  onChange={handleChange}
                  name="email"
                  placeholder="Enter Email"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div>
              <label htmlFor="">Password : </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  onChange={handleChange}
                  name="password"
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Enter Password"
                  className="w-full h-full outline-none bg-transparent"
                />
                <div>
                  <span
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    className="cursor-pointer"
                  >
                    {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              <Link
                className="block w-fit ml-auto hover:underline hover:text-red-600"
                to={"/forget-password"}
              >
                Foget Password
              </Link>
            </div>
            <button className="bg-red-600 text-white w-full px-6 py-2 max-w-[150px] rounded-full hover:bg-red-800 hover:scale-110 transition-all mx-auto block mt-6">
              Login
            </button>
          </form>

          <p className="my-5">
            Don't Have Account ?{" "}
            <Link className="hover:underline hover:text-red-600" to={"/signup"}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
