import React from "react";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

function Header() {
  return (
    <div>
      <header
        className="flex items-center h-24 container w-full mx-auto justify-center gap-24"
      >
        <h1 className="text-2xl">Logo</h1>
        <button className="flex">
          <span>Pruducts</span>
          <FaBars size={25} />
        </button>
        <div className="input">
          <input type="text" placeholder="Search" />
          <button>
            <CiSearch />
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
    </div>
  );
}

export default Header;
