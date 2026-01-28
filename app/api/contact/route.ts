import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// POST: upis nove poruke
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message, service } = data;
    if (!name || !email || !message || !service) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    const newMessage = await prisma.contactMessage.create({
      data: { name, email, message, service },
    });
    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// GET: lista svih poruka
export async function GET() {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
