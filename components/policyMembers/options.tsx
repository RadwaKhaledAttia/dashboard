import React from "react";
import {
  CardIcon,
  CrownIcon,
  DeleteIcon,
  WalletIcon,
  WelcomeIcon,
} from "./icons";

const allOptions = [
  "Change ID",
  "Change Risk",
  "Change Class",
  "Delete",
  "Send Welcome Kit",
  "Download eCard",
];

const icons = [
  CardIcon,
  WalletIcon,
  CrownIcon,
  DeleteIcon,
  WelcomeIcon,
  CardIcon,
];

const Options = () => {
  return (
    <div className="lg:w-5/6 w-full md:flex items-center justify-between flex-wrap grid grid-cols-2">
      {allOptions.map((option, index) => (
        <div className="flex items-center gap-2">
          {icons[index]()}
          <p>{option}</p>
        </div>
      ))}
    </div>
  );
};

export default Options;
