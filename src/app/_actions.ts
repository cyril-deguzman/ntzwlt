"use server";

import { User } from "@/components/forms/login-form";
import { cookies } from "next/headers";
import axios from "axios";
import { TreeNode } from "./home/page";

// Auth Functions
export async function getUser(credentials: {
  username: string;
  password: string;
}) {
  const response = await axios
    .post(
      "https://netzwelt-devtest.azurewebsites.net/Account/SignIn",
      credentials
    )
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e.message;
    });

  return response;
}

// Cookie Functions
export async function saveAccessToken(data: User) {
  cookies().set("ntzwlt-user", JSON.stringify(data));
}

export async function deleteAccessToken() {
  cookies().delete("ntzwlt-user");
}

// Territory Functions
export async function getTerritories() {
  const response = await axios
    .get("https://netzwelt-devtest.azurewebsites.net/Territories/All")
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      e.message;
    });

  if (typeof response === "string") return response;

  return buildTree(response.data);
}

function buildTree(data: TreeNode[]): TreeNode[] {
  const tree: TreeNode[] = [];
  const nodeMap: Record<string, TreeNode> = {};

  for (const item of data) {
    nodeMap[item.id] = { ...item, children: [] };
  }

  for (const item of data) {
    if (item.parent === null) {
      tree.push(nodeMap[item.id]);
    } else {
      const parentNode = nodeMap[item.parent];
      if (parentNode) {
        parentNode.children!.push(nodeMap[item.id]);
      }
    }
  }

  return tree;
}
