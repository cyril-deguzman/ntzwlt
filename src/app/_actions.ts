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
