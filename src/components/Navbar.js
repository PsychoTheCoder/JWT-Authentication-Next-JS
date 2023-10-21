"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useUserStore } from "../store/store";
import ProfileDropdown from "./ProfileDropdown";
const jwt = require("jsonwebtoken");
function Navbar() {
  const { setIsLogin, username, isLogin, setUsername } = useUserStore();


  


  const tokenVerification = async () => {
    let key = process.env.JWT_TOKEN;

    var token = localStorage.getItem("hoxtrackr_token");
    if (token != null) {
      var verification = await jwt.decode(token, key);

      console.log(verification);
      if (verification != null) {
        setIsLogin(true);
        setUsername(verification.username);
      }
    }
  };

  useEffect(() => {
    tokenVerification();
  }, []);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/features"}>Features</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost normal-case text-xl">
            HoxTrackr
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/features"}>Features</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {isLogin ? (
            <ProfileDropdown username={username} />
          ) : (
            <Link href={"/login"} className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
