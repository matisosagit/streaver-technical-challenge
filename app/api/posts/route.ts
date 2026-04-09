import { NextResponse, NextRequest } from "next/server";

const link = process.env.NEXT_PUBLIC_API_URL;

export async function GET(req: NextRequest) {
    const id = req.nextUrl.searchParams.get("userId");

    if (!link) {
        return NextResponse.json(
            { error: "API URL not configured" },
            { status: 500 }
        );
    }

    if (!id) {
        return NextResponse.json(
            { error: "Missing userId" },
            { status: 400 }
        );
    }

    const res = await fetch(`${link}/?userId=${id}`);
    const data = await res.json();
    return NextResponse.json(data);
}