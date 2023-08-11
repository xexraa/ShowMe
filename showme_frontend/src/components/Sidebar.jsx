import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

import logo from "../assets/logo.png";
import { categories } from "../utils/data";

const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
const isActiveStyle =
  "flex items-center px-5 gap-3 font-extrabold border-r-2 border-pink transition-all duration-200 ease-in-out capitalize";

const Sidebar = ({ user, closeToggle }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };
  return (
    <div className="flex flex-col justify-between bg-[#310B0B] h-full overflow-y-scroll min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" className="w-auto max-w-[230px]" />
        </Link>
        <div className="flex flex-col gap-5 2xl:text-xl" style={{color: "#EEB76B"}}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
            style={{color: "#EEB76B"}}
          >
            <RiHomeFill style={{color: "#EEB76B"}}/>
            Home
          </NavLink>
          <h3 className="mt-2 px-5 text-base 2xl:text-2xl" style={{color: "#E2703A"}}>
            Discover categories
          </h3>
          {categories.map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              style={{color: "#EEB76B"}}
              onClick={handleCloseSidebar}
              key={category.name}
            >
              <img
                src={category.image}
                className="w-10 h-10 rounded-full shadow-sm"
                alt="category"
              />
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
      {user && (
        <Link
          to={`user-profile/${user._id}`}
          onClick={handleCloseSidebar}
          className="flex my-5 mb-3 gap-2 p-2 items-center bg-[#9C3D54] rounded-lg shadow-lg mx-3 2xl:text-xl"
          style={{color: "#EEB76B"}}
        >
          <img
            src={user.image}
            className="w-10 h-10 rounded-full"
            alt="user-profile"
          />
          <p>{user.userName}</p>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
