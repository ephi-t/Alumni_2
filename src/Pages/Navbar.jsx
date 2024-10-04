import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 ">
      <img
        onClick={() => {
          navigate("/");
        }}
        className="w-24 md:w-32  cursor-pointer"
        src={assets.dbulogo}
        alt=""
      />

      <ul className="hidden font-semibold md:flex items-start gap-5 font-me">
        <NavLink to="/">
          <li className="py-1 uppercase">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/event">
          <li className="py-1 uppercase">Event</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/alumni">
          <li className="py-1 uppercase">Alumni</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/job">
          <li className="py-1 uppercase">Job</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/donation">
          <li className="py-1 uppercase">Donation</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/dashboard">
          <li className="py-1 uppercase">Dashboard</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>

      <div className=" flex  items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5 " src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 font-medium text-gray-600 z-20 hidden  group-hover:block">
              <div className=" bg-stone-100 rounded flex flex-col gap-4 p-4 ">
                <p
                  onClick={() => {
                    navigate("my-profile");
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>

                <p
                  onClick={() => {
                    setToken(false);
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  LogOut
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => {
              navigate("/createaccount");
            }}
            className="bg-teal-500 font-semibold text-white px-2 py-3 rounded-full  hidden md:block  "
          >
            Create Accout
          </button>
        )}

        <img
          onClick={() => {
            setShowMenu(true);
          }}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
        />

        {/* mobile menu */}
        <div
          className={`${
            showMenu ? `fixed w-full ` : `h-0 w-0`
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.dbulogo} alt="" />
            <img
              className="w-7"
              onClick={() => {
                setShowMenu(false);
              }}
              src={assets.cross_icon}
              alt=""
            />
          </div>

          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block"> Home</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/event">
              <p className="px-4 py-2 rounded inline-block">Event</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/alumni">
              <p className="px-4 py-2 rounded inline-block"> Alumni</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/job">
              <p className="px-4 py-2 rounded inline-block"> Job</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/dashboard">
              <p className=" bg-blue-300 px-4 py-2 rounded inline-block hover:scale-105 transition-all duration-300">
                {" "}
                Dashboard
              </p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
