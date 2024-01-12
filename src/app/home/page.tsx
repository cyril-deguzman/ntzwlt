"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { deleteAccessToken } from "../_actions";

export default function Home() {
  const router = useRouter();

  const handleLogout = async () => {
    await deleteAccessToken();
    router.push("/");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={() => handleLogout()}>logout</Button>
    </main>
  );
}
