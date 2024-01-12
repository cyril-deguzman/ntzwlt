import { cookies } from "next/headers";
import { getTerritories } from "../_actions";
import TerritoryList from "@/components/territory-list";

export interface Territory {
  id: string;
  name: string;
  parent: string | null;
}

export interface TreeNode {
  id: string;
  name: string;
  parent: string | null;
  children?: TreeNode[];
}

export default async function Home() {
  const tree = await getTerritories();
  const cookieStore = cookies();
  const user = cookieStore.get("ntzwlt-user");
  const parsedUser = JSON.parse(user?.value ?? "");

  return (
    <main className="flex flex-col gap-y-4">
      <div>
        <h1 className="mt-4 text-xl">{`Hello, ${parsedUser.displayName}`}</h1>
        <p className="text-sm">
          below are the list of territories you requested!
        </p>
      </div>

      <div className="flex pt-4 w-full">
        {typeof tree === "string" ? (
          <div>{tree}</div>
        ) : (
          <TerritoryList tree={tree} />
        )}
      </div>
    </main>
  );
}
