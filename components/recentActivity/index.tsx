import React from "react";
import Image from "next/image";
import AddUser from "@/public/assets/quick actions/user-add.svg";
import DeleteUser from "@/public/assets/quick actions/profile-delete.svg";
import CrownIcon from "@/public/assets/quick actions/crown.svg";
import ErrorIcon from "@/public/assets/quick actions/message-question.svg";
import Link from "next/link";

const showError = (title: string, details: string, bold?: string) => (
  <div className="flex items-start gap-3 bg-red-100 p-4 rounded-xl">
    <Image src={ErrorIcon} alt="Error" />
    <div className="flex flex-col items-start">
      <p className="text-xs font-bold text-rose-500">{title}</p>
      <h5 className="text-sm text-gray-500">
        {details}
        <span className="font-bold">{bold}</span>
      </h5>
    </div>
  </div>
);

const RecentActivity = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <button className="w-full py-3 rounded-3xl bg-violet-50 text-violet-700">
          Recent Reimbursements
        </button>
        <button className="w-full py-3 rounded-3xl bg-white">
          Recent Interactions
        </button>
      </div>
      <div className="flex flex-col bg-white p-4 rounded-xl gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src={AddUser} alt="add member" />
            <h5 className="text-slate-900 font-bold text-sm">Add Members</h5>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-2 bg-neutral-50 rounded-2xl text-xs">
              1 Member
            </div>
            <div className="px-3 py-2 bg-red-50 text-red-500 rounded-2xl text-xs">
              Rejected
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p>Ref.ID: 4537456745</p>
          <p>12-Oct-2023</p>
        </div>
        {showError(
          "Reason:",
          "Please place the rejection reason here from the system."
        )}
      </div>
      <div className="flex flex-col bg-white p-4 rounded-xl gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src={DeleteUser} alt="Delete member" />
            <h5 className="text-slate-900 font-bold text-sm">
              Delete Members
            </h5>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-2 bg-neutral-50 rounded-2xl text-xs">
              3 Members
            </div>
            <div className="px-3 py-2 bg-orange-100 text-orange-600 rounded-2xl text-xs">
              In Progress
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p>Ref.ID: 4537456745</p>
          <p>12-Oct-2023</p>
        </div>
      </div>
      <div className="flex flex-col bg-white p-4 rounded-xl gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src={CrownIcon} alt="Crown member" />
            <h5 className="text-slate-900 font-bold text-sm">
              Upgrade Class
            </h5>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-2 bg-neutral-50 rounded-2xl text-xs">
              3 Members
            </div>
            <div className="px-3 py-2 bg-green-100 text-green-600 rounded-2xl text-xs">
              Approved
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p>Ref.ID: 4537456745</p>
          <p>12-Oct-2023</p>
        </div>
      </div>
      <div className="flex flex-col bg-white p-4 rounded-xl gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src={AddUser} alt="Add dependent" />
            <h5 className="text-slate-900 font-bold text-sm">
              Add dependent
            </h5>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-2 bg-orange-100 text-orange-600 rounded-2xl text-xs">
              In Progress
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p>Ref.ID: 4537456745</p>
          <p>12-Oct-2023</p>
        </div>
        {showError(
          "300 SAR Pending via Sadad",
          "Please pay your sadad payment No# ",
          "34567832"
        )}
      </div>
      <Link href="#" className="text-violet-700 text-xs font-bold">{'View All Reimbursements ->'} </Link>
    </div>
  );
};

export default RecentActivity;
