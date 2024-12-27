import React from "react";
import { GrSearch } from "react-icons/gr";

const SearchBar = () => {
  return (
    <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
      <input
        type="search"
        className="outline-none w-full "
        placeholder="Search Product Here"
      />
      <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center text-white rounded-r-full">
        <GrSearch />
      </div>
    </div>
  );
};

export default SearchBar;
