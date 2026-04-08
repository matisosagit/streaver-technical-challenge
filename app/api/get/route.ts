import { NextResponse } from "next/server";

const link = process.env.NEXT_PUBLIC_API_URL;

export async function GET() {
    if (!link) {
        return NextResponse.json(
            { error: "API URL not configured" },
            { status: 500 }
        );
    }
    
    const res = await fetch(link);
    const data = await res.json();
    return NextResponse.json(data);
}