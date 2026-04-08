import { NextResponse } from "next/server";

const link = process.env.NEXT_PUBLIC_API_URL;

export async function POST(req: Request) {
    const { id } = await req.json();
    const res = await fetch(`${link}/?userId=${id}`);
    const data = await res.json();
    return NextResponse.json(data);
}