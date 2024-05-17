"use client"

import Home from "@/app/page";
import Link from "next/link";
import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Logic to handle search based on searchQuery
    console.log("Search for:", searchQuery);
  };

  const handleInputChange = (event:any) => {
    setSearchQuery(event.target.value);
  };

  
  return (
    <div className="w-full shadow-slate-700 fixed top-0 bg-white z-50">
      <header className="flex items-center h-24 container w-full mx-auto justify-center gap-20 ">
        <Link href="/">
        <img  className="w-28" src="https://alifshop.uz/_ipx/s_113x32/images/alifshop-logo.svg" alt="" />
        </Link>
        <button className="flex bg-yellow-500 px-5 py-2 rounded-xl">
          <FaBars size={25} />
          <span className="ml-2">Pruducts</span>
        </button>
        <div className="input flex items-center">
        <input
            className="border-yellow-500 rounded-s-xl border-2 border-solid py-[9px] px-3 focus:outline-none focus:border-yellow-500"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button
            className="bg-yellow-500 border-yellow-500  px-[18px] py-[10px] pt-[11px]  rounded-e-xl "
            onClick={handleSearch}
          >
            <CiSearch size={24} className="" />
          </button>
        </div>
        <Link href="/cart">
        <div  className="cart cursor-pointer flex flex-col  items-center">
          <BsCart2 />
          <span>Cart</span>
        </div>
        </Link>
        <div className="cart cursor-pointer flex flex-col  items-center">
          <MdFavoriteBorder />
          <span>Favorites</span>
        </div>
        <button className="py-2 px-3 border-yellow-500 border-2 border-solid rounded-xl hover:bg-yellow-50">
          Sign Up
        </button>
        <p>
          <span className="cursor-pointer">РУС </span> /{" "}
          <span className="cursor-pointer">UZB</span>
        </p>
      </header>
      <div className="bg-slate-300 w-full h-[2px]"></div>
      {/* <Home searchQuery={searchQuery} /> */}
    </div>
  );
}

export default Header;
