"use client";

import LogoutButton from "@/components/logout-button";
import { ThemeToggler } from "@/components/theme-toggler";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col gap-y-2 p-12 md:p-24 xl:p-36">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-bold text-2xl">Netzwelt</h1>
        <div className="flex gap-x-2 items-center">
          <ThemeToggler />
          <LogoutButton />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
