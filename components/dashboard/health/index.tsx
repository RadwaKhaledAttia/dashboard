import React, { FC } from "react";
import Image from "next/image";
import HeartIcon from "@/public/assets/heart.svg";
import InsuranceIcon from "@/public/assets/insurance.svg";
import CalendarIcon from "@/public/assets/calendar.svg";
import MoneysIcon from "@/public/assets/moneys.svg";
import PeopleIcon from "@/public/assets/people.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const statSection = (
  icon: string | StaticImport,
  title1: string,
  title2: string
) => (
  <div className="flex items-start gap-3">
    <Image src={icon} alt="heart" />
    <div className="flex flex-col items-start">
      <p className="text-xs font-normal text-gray-500">{title1}</p>
      <h5 className="text-sm font-bold">{title2}</h5>
    </div>
  </div>
);

const Health = () => {
  return (
    <div className="w-full px-4 py-6 bg-white rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <Image src={HeartIcon} alt="heart" />
          <div className="flex flex-col items-start">
            <p className="text-xs font-normal text-rose-500">Health</p>
            <h5 className="text-sm font-bold">Policy No. 20268494</h5>
          </div>
        </div>
        <button className="bg-violet-700 text-white p-4 rounded-lg text-xs">
          Download Policy
        </button>
      </div>
      <div className="md:flex items-center justify-between bg-slate-100 mt-4 px-4 py-6 rounded-lg">
        <div className="md:flex items-center flex-wrap grid gap-5">
          {statSection(InsuranceIcon, "Insurance Type", "Compulsory Medical")}
          {statSection(CalendarIcon, "Expiry Date", "12 Dec 2022")}
          {statSection(MoneysIcon, "Premium", "152,360.27 SAR")}
          {statSection(PeopleIcon, "Total Members", "7,550")}
        </div>
        <div className="flex justify-end">
        <button className="bg-white text-violet-700 p-4 rounded-lg text-xs">
          Coverage & Benefits
        </button>
        </div>
      </div>
    </div>
  );
};

export default Health;
