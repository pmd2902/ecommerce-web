import accountApiRequest from "@/apiRequest/account";
import { cookies } from "next/headers";

export default async function MeProfile() {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");
  const result = await accountApiRequest.me(sessionToken?.value ?? "");

  return (
    <div>
      <h1>Profile</h1>
      <div>{result.payload.data.name}</div>
    </div>
  );
}
