import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const newHeaders = headers();

  cookies().set("profile", "John");
  console.log(requestHeaders.get("authorization"));
  console.log(newHeaders.get("authorization"));
  console.log(request.cookies.get("theme"));
  console.log(cookies().get("profile"));
  return new Response("Profile API", {
    headers: {
      "Set-Cookie": "theme=dark",
    },
  });
}
