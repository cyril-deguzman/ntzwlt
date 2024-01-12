"use server";

import axios from "axios";

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

export async function getTerritories() {
  const response = await axios
    .get("https://netzwelt-devtest.azurewebsites.net/Territories/All")
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      e.message;
    });

  return response;
}

import { cookies } from "next/headers";

export async function saveAccessToken(data: {
  username: string;
  displayName: string;
  roles: [];
}) {
  cookies().set("ntzwlt-user", JSON.stringify(data));
}

export async function deleteAccessToken() {
  cookies().delete("ntzwlt-user");
}
