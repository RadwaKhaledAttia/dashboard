import Image from "next/image";
import AddLayout from "@/components/layout/wrap-layout";
import Health from "@/components/dashboard/health";
import QuickActions from "@/components/quickActions";
import RecentActivity from "@/components/recentActivity";
import PolicyMembers from "@/components/policyMembers";

const Home = () => {
  return (
    <main className="grid grid-cols-1 xl:grid-cols-3 gap-6 p-2 mb-8 sm:p-4 xl:p-6">
      <div className="xl:col-span-2 flex flex-col gap-6">
        <Health />
        <PolicyMembers />
      </div>
      <div className="xl:col-span-1 grid gap-16">
        <QuickActions />
        <RecentActivity />
      </div>
    </main>
  );
};

export default AddLayout(Home);
