import TerritoryList from "@/components/territory-list";
import { getTerritories } from "../_actions";

export interface Territory {
  id: string;
  name: string;
  parent: string | null;
}

export type Data = {
  data: Territory[];
};

export default async function Home() {
  const data: Data = await getTerritories();
  return <TerritoryList data={data} />;
}
