import { NextResponse } from "next/server";

export async function POST() {
  try {
    const { default: prisma } = await import("@/lib/prisma");

    // Pokušaj kreiranje tabele ako ne postoji ili ažuriranje strukture
    const result = await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "User" (
        id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
        name TEXT,
        email TEXT UNIQUE NOT NULL,
        image TEXT
      );
    `;

    await prisma.$disconnect();

    return NextResponse.json({
      status: "success",
      message: "Database schema updated/created",
      result,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "error",
        error: {
          message: error.message,
          code: error.code,
          name: error.name,
        },
      },
      { status: 500 },
    );
  }
}
