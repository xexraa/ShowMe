import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAdd, IoMdSearch } from "react-icons/io";

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <div
      className="flex gap-2 md:gap-5 w-full mt-5 pb-7"
      style={{
        background:
          "linear-gradient(90deg, rgba(156,61,84,1) 0%, rgba(226,112,58,1) 50%, rgba(238,183,107,1) 100%)",
      }}
    >
      <div className="flex justify-start items-center w-full px-2 rounded-md bg-gray-100 outline-none focus-within:shadow-sm">
        <IoMdSearch fontSize={40} className="ml-1" />
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          value={searchTerm}
          onFocus={() => navigate("/search")}
          className="p-2 w-full outline-none bg-gray-100"
        />
      </div>
      <Link to={`user-profile/${user?._id}`} className="hidden md:block">
        <img src={user.image} alt="user" className="w-14 h-12 rounded-full" />
      </Link>
      <Link
        to="create-pin"
        className="bg-[#9C3D54] text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center"
        style={{ fontSize: "42px" }}
      >
        <IoMdAdd />
      </Link>
    </div>
  );
};

export default Navbar;
