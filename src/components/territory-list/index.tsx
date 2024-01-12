"use client";

import { Data } from "@/app/home/page";
import { deleteAccessToken } from "@/app/_actions";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const TerritoryList = ({ data }: { data: Data }) => {
  const router = useRouter();

  const handleLogout = async () => {
    await deleteAccessToken();
    router.push("/");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {data.data.map((territory, index) => {
          return <p key={index}>{territory.name}</p>;
        })}
      </div>
      <div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </main>
  );
};

export default TerritoryList;
