import React, { useState } from "react";
import LogoGif from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import ImageToBase64 from "../helpers/ImageToBase64";

const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: "",
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
  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    const image = await ImageToBase64(file);
    setData({ ...data, profilePic: image });
  };

  return (
    <section id="signup">
      <div className=" mx-auto container p-4">
        <div className="bg-white p-5 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data?.profilePic ? data?.profilePic : LogoGif} alt="" />
            </div>
            <form>
              <label>
                <div className="text-xs bg-opacity-85 bg-slate-200 pb-4 pt-2 text-center absolute bottom-0 w-full cursor-pointer">
                  Upload Image
                </div>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </form>
          </div>
          <form onSubmit={handleSubmit} className="pt-6 flex flex-col gap-2">
            <div className="grid">
              <label htmlFor="">Name : </label>
              <div className="bg-slate-100 p-2 ">
                <input
                  type="name"
                  onChange={handleChange}
                  name="name"
                  placeholder="Enter Name"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
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
            </div>
            <div>
              <label htmlFor="">Confirm Password : </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  onChange={handleChange}
                  name="confirmPassword"
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  placeholder="Enter Confirm Password"
                  className="w-full h-full outline-none bg-transparent"
                />
                <div>
                  <span
                    onClick={() =>
                      setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                    }
                    className="cursor-pointer"
                  >
                    {isConfirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
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
              Sign Up
            </button>
          </form>

          <p className="my-5">
            Already Have Account ?{" "}
            <Link className="hover:underline hover:text-red-600" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
