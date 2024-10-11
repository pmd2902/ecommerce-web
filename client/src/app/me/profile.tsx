"use client";

import accountApiRequest from "@/apiRequest/account";
import { useAppContext } from "@/AppProvider";
import { useEffect } from "react";

export default function Profile() {
  const { sessionToken } = useAppContext();

  useEffect(() => {
    const fecthRequest = async () => {
      const result = await accountApiRequest.me(sessionToken);
      console.log(result);
    };
    fecthRequest();
  }, [sessionToken]);
  return (
    <div>
      <h1>Profile</h1>
      {/* <div>{result.payload.data.name}</div> */}
    </div>
  );
}
