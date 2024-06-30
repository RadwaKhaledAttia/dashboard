import React, { FC } from "react";
import Image from "next/image";
import MenuIcon from "@/public/assets/menu.svg";

type Props = { title: string };

const Title: FC<Props> = ({ title }) => {
  return (
    <div className="flex items-center gap-2">
      <Image src={MenuIcon} alt="dashboard title" />
      <h5 className="text-base font-bold text-slate-900">{title}</h5>
    </div>
  );
};

export default Title;
