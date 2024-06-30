import React from "react";
import Image from "next/image";
import GenderIcon from "@/public/assets/Gender.svg";
import ProfileIcon from "@/public/assets/profile-2user.svg";
import ArrowIcon from "@/public/assets/arrow-down.svg";

const OneItem = () => {
  return (
    <div className="md:flex items-center justify-between flex-wrap p-4 rounded-xl bg-white grid grid-cols-1 gap-2">
      <div className="flex items-center gap-4">
        <input
          id="link-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-violet-700 bg-neutral-100 border-neutral-100 rounded focus:ring-transparent dark:focus:ring-transparent"
        />
        <Image src={GenderIcon} alt="Gender" />
        <div>
          <h6 className="text-slate-900 font-bold text-base">
            Ali Ahmed Ayeb Alghamdi
          </h6>
          <p className="flex items-center gap-4 text-xs">
            <span>
              Card Code:{" "}
              <span className="text-slate-900 font-bold">0010709899001</span>
            </span>
            <span>
              ID:{" "}
              <span className="text-slate-900 font-bold">0010709899001</span>{" "}
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-end">
        <div className="px-4 py-2 rounded-3xl text-xs text-violet-700 bg-violet-100">
          Class A
        </div>
        <div className="px-4 py-2 rounded-full text-xs text-white bg-violet-700 flex items-center gap-1">
          <Image src={ProfileIcon} alt="Profile" />3
        </div>
        <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
          <Image src={ArrowIcon} alt="Arrow" />
        </div>
      </div>
    </div>
  );
};

export default OneItem;
