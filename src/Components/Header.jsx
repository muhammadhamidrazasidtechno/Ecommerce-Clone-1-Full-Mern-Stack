import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-16 bg-white shadow-md">
      <div className="container mx-auto h-full items-center flex px-4 justify-between">
        <div className="">
          <Link to="/">
            <Logo width={90} height={50} />
          </Link>
        </div>
        <SearchBar />
        <div className="flex items-center gap-4">
          <div className="text-3xl cursor-pointer">
            <FaRegCircleUser />
          </div>
          <div className="text-2xl cursor-pointer relative">
            <span>
              <FaShoppingCart />
            </span>
            <div className=" bg-red-600 text-white w-5 h-5  rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
              <p className="text-xs">0</p>
            </div>
          </div>
          <div>
            <Link
              to={"/login"}
              className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-all"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
