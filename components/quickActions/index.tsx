import React from "react";
import Image from "next/image";
import { Actions } from "./actions";

const QuickActions = () => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="font-bold text-base text-slate-900">Quick Actions</h4>
      <div className="grid grid-cols-2 gap-2">
      {Actions.map((action) => (
        <div className="flex items-center gap-3 bg-white pl-4 py-4 rounded-lg">
          <Image src={action.icon} alt={action.title} />
          <p className="text-sm">{action.title}</p>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default QuickActions;
