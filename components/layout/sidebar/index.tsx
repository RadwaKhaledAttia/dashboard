"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import Logo from "@/public/assets/Tawuniya-Logo.svg";
import SidebarTabs from "./tabs";
import { ProfileIcon } from "./icons";

type Props = {
  children: React.ReactNode;
};

const Sidebar: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        data-drawer-target="cta-button-sidebar"
        data-drawer-toggle="cta-button-sidebar"
        aria-controls="cta-button-sidebar"
        id="cta-button-sidebar-open-btn"
        type="button"
        className={`inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden 
        hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
        dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${open && "ms-20"}`}
        onClick={() => setOpen(!open)}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 
            01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 
            1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="cta-button-sidebar"
        className={`fixed top-0 start-0 z-40  h-screen transition-transform 
        ${open ? "" : "-translate-x-full sm:translate-x-0"}`}
        aria-label="Sidebar"
      >
        <div
          className="flex flex-col items-center justify-between h-full px-1 py-4 overflow-y-auto overflow-x-hidden bg-white 
          dark:bg-neutral-800 border-e border-violet-100 dark:border-neutral-800"
        >
          <Image src={Logo} alt="logo" width={34} className="mb-4" />
          <SidebarTabs />
          <div>{ProfileIcon()}</div>
        </div>
      </aside>
      <div className={`${open ? "ms-16" : ""} sm:ms-16`}>{children}</div>
    </>
  );
};

export default Sidebar;
