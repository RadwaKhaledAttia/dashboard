import React from "react";
import Title from "../title";
import Options from "./options";
import OneItem from "./rowItem";

const PolicyMembers = () => {
  return (
    <div className="flex flex-col gap-4">
      <Title title="Policy Members" />
      <div className="flex items-center justify-between flex-wrap bg-white px-4 py-6 rounded-xl">
        <div className="flex items-center">
          <input
            id="link-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-violet-700 bg-neutral-100 border-neutral-100 rounded focus:ring-transparent dark:focus:ring-transparent"
          />
          <label
            htmlFor="link-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Select All
          </label>
        </div>
        <Options />
      </div>
      <div className="flex flex-col gap-1">
      {Array.from({ length: 10 }, (_, i) => i + 1).map(() => (
        <OneItem />
      ))}
      </div>
    </div>
  );
};

export default PolicyMembers;
