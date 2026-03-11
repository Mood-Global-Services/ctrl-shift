import { NextResponse } from "next/server";
import { getSpeakers } from "@/lib/speakers";

export async function GET() {
  try {
    const speakers = await getSpeakers();
    return NextResponse.json(speakers);
  } catch (error) {
    console.error("Failed to fetch speakers:", error);
    return NextResponse.json([], { status: 500 });
  }
}
