"use client";

import authApiRequest from "@/apiRequest/auth";
import { clientSessionToken } from "@/lib/http";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Logout() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sessionToken = searchParams.get("sessionToken");
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    if(sessionToken === clientSessionToken.value) {
        authApiRequest.logoutFromNextClientToNextServer(true, signal).then((res) => {
            router.push(`/login?redirectForm=${pathname}`);
        });
    }
    return () => {
        controller.abort();
    }
  }, [pathname, router, sessionToken]);
  return <div>page</div>;
}
