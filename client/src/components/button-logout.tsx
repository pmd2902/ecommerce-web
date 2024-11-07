'use client'
import authApiRequest from "@/apiRequest/auth";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { handleErrorApi } from "@/lib/utils";

export default function ButtonLogout() {
  const route = useRouter();
  const handleLogout = async () => {
    try {
      await authApiRequest.logoutFromNextClientToNexServer();
      route.push("/login");
    } catch (error) {
      handleErrorApi({ error });
    }
  };
  return (
    <Button size={"sm"} onClick={handleLogout}>
      Đăng xuất
    </Button>
  );
}
