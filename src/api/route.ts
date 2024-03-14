import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = request.json();
  return NextResponse.json(res);
}

export async function POST(request: Request) {
  const res = await request.json();
  return NextResponse.json(res);
}

export async function PUT(request: Request) {
  const res = await request.json();
  return NextResponse.json(res);
}

export async function DELETE(request: Request) {
  const res = await request.json();
  return NextResponse.json(res);
}
