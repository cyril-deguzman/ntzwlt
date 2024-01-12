"use client";

import { ThemeToggler } from "@/components/theme-toggler";
import { Waypoints } from "lucide-react";
import LogInForm from "@/components/forms/login-form";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-x-2 items-center">
          <Waypoints />
          <h1 className="font-bold text-2xl">Netzwelt</h1>
        </div>
        <ThemeToggler />
      </div>
      <div className="flex w-full justify-center h-[55vh] items-center">
        <LogInForm />
      </div>
    </div>
  );
}
