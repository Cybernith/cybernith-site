import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  return NextResponse.json({ ok: true });
}
