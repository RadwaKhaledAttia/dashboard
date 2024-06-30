"use client";
import React from "react";
import Breadcrumb from "./breadcrumb";
import { PhoneIcon, SearchIcon, NotificationIcon, UserIcon } from "./icons";

const Navbar = () => {
  return (
    <>
      <nav className="pt-4 pb-8 dark:bg-neutral-800 hidden lg:block">
        <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-2 md:px-6 ">
          <Breadcrumb />
          <div className="flex items-center gap-4">
            <button>العربية</button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                {SearchIcon()}
              </div>
              <div className="relative w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                <div className="absolute w-2 h-2 rounded-full top-0 right-0 bg-green-500" />
                {PhoneIcon()}
              </div>
              <div className="relative w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                <div className="absolute w-2 h-2 rounded-full top-0 right-0 bg-rose-500" />
                {NotificationIcon()}
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-purple-800 flex items-center justify-center">
              {UserIcon()}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
