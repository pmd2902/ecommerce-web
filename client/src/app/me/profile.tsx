"use client";

import accountApiRequest from "@/apiRequest/account";
import { handleErrorApi } from "@/lib/utils";
import { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    const fecthRequest = async () => {
      try {
        const result = await accountApiRequest.meClient();
      } catch (error) {
        handleErrorApi({
          error
        });
      }
    };
    fecthRequest();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}
