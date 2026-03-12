import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSpeakers, addSpeaker, deleteSpeaker } from "@/lib/speakers";

export async function GET() {
  try {
    const speakers = await getSpeakers();
    return NextResponse.json(speakers);
  } catch (error) {
    console.error("Failed to fetch speakers:", error);
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      name?: string;
      bio?: string;
      profilePicUrl?: string;
      personalWebsite?: string;
      affiliations?: { company_name: string; company_website: string; company_description: string }[];
    };

    if (!body.name?.trim()) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const speaker = await addSpeaker({
      name: body.name.trim(),
      bio: body.bio?.trim() ?? "",
      profilePicUrl: body.profilePicUrl?.trim() ?? "",
      personalWebsite: body.personalWebsite?.trim() ?? "",
      affiliations: body.affiliations ?? [],
    });

    return NextResponse.json(speaker, { status: 201 });
  } catch (error) {
    console.error("Failed to add speaker:", error);
    return NextResponse.json({ error: "Failed to add speaker" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = (await req.json()) as { id?: string };

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await deleteSpeaker(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete speaker:", error);
    return NextResponse.json({ error: "Failed to delete speaker" }, { status: 500 });
  }
}
