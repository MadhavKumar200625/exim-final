import { NextResponse } from "next/server";
import { getSearchData } from "@/lib/getSearchData";

export async function POST(request) {
  let query;

  try {
    query = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid search request" }, { status: 400 });
  }

  const { type, country, product = "", hscode = "" } = query || {};
  if (!country || !["import", "export"].includes(type)) {
    return NextResponse.json({ error: "Invalid search request" }, { status: 400 });
  }

  try {
    const result = await getSearchData({ type, country, product, hscode });
    return NextResponse.json({
      available: Array.isArray(result?.data) && result.data.length > 0,
    });
  } catch {
    return NextResponse.json(
      { error: "Search availability could not be checked" },
      { status: 503, headers: { "X-Robots-Tag": "noindex, nofollow" } }
    );
  }
}
