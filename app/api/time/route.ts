import { NextRequest } from "next/server";

export const dynamic = "force-dynamic"; // default = auto
export async function GET(_request: NextRequest) {
  return new Response(new Date().toLocaleTimeString());
}
