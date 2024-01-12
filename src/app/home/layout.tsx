"use client";

import LogoutButton from "@/components/logout-button";
import { ThemeToggler } from "@/components/theme-toggler";
import { Waypoints } from "lucide-react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-x-2 items-center">
          <Waypoints />
          <h1 className="font-bold text-2xl">Netzwelt</h1>
        </div>

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
