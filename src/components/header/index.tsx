import React from "react";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

function Header() {
  return (
    <div className="w-full shadow-slate-700 fixed top-0 bg-white">
      <header className="flex items-center h-24 container w-full mx-auto justify-center gap-24 ">
        <h1 className="text-2xl">Logo</h1>
        <button className="flex bg-yellow-500 px-3 py-2 rounded-xl">
          <FaBars size={25} />
          <span className="ml-2">Pruducts</span>
        </button>
        <div className="input flex items-center">
          <input
            className="border-yellow-500 rounded-s-xl border-2 border-solid py-[9px] px-3 focus:outline-none focus:border-yellow-500 "
            type="text"
            placeholder="Search"
          />
          <button className="bg-yellow-500 border-yellow-500  px-[18px] py-[10px] pt-[11px]  rounded-e-xl ">
            <CiSearch size={24} className="" />
          </button>
        </div>
        <div className="cart">
          <BsCart2 />
          <span>Cart</span>
        </div>
        <div className="cart">
          <MdFavoriteBorder />
          <span>Favorites</span>
        </div>
        <button>Sign Up</button>
        <p>РУС / UZB</p>
      </header>
      <div className="bg-slate-300 w-full h-[2px]"></div>
    </div>
  );
}

export default Header;
