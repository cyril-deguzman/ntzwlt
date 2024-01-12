"use client";

import { deleteAccessToken } from "@/app/_actions";
import { useRouter } from "next/navigation";
import { Button } from "../ui";

/**
 * TODO: refactor for a more general use case where
 * input parameter is the handler that contains the
 * logic that needs to use the server
 */
const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await deleteAccessToken();
    router.push("/");
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
