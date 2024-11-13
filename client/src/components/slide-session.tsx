"use client";

import authApiRequest from "@/apiRequest/auth";
import { clientSessionToken } from "@/lib/http";
import React, { useEffect } from "react";
import { differenceInHours } from "date-fns";

export default function SlideSession() {
  useEffect(() => {
    const interval = setInterval(async () => {
      const now = new Date();
      const expireAt = new Date(clientSessionToken.expiresAt);
      if (differenceInHours(now, expireAt) < 1) {
        const res =
          await authApiRequest.slideSessionFromNextClientToNextServer();
        clientSessionToken.expiresAt = res.payload.data.expiresAt;
      }
    }, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);
  return null;
}
