"use client";

import accountApiRequest from "@/apiRequest/account";
import { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    const fecthRequest = async () => {
      const result = await accountApiRequest.meClient();
      console.log(result);
    };
    fecthRequest();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}
