"use client";

import { ThemeToggler } from "@/components/theme-toggler";
import LogInForm from "@/components/forms/login-form";

export default function Home() {
  return (
    <main className="flex flex-col p-12 md:p-24 xl:p-36">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-2xl">Netzwelt</h1>
        <ThemeToggler />
      </div>
      <div className="flex w-full justify-center h-[63vh] items-center">
        <LogInForm />
      </div>
    </main>
  );
}
