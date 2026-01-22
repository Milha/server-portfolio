import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Debug informacije
    const debugInfo = {
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      databaseUrl: process.env.DATABASE_URL ? "SET" : "NOT SET",
      databaseUrlPrefix: process.env.DATABASE_URL
        ? process.env.DATABASE_URL.substring(0, 20) + "..."
        : "NO URL",
    };

    // Pokušaj jednostavnu konekciju i čitanje usera
    let connectionTest = "NOT TESTED";
    let usersTest = "NOT TESTED";
    let error = null;
    let users: any[] = [];

    try {
      const { default: prisma } = await import("@/lib/prisma");

      // Test osnovne konekcije
      await prisma.$connect();
      connectionTest = "SUCCESS";

      // Test čitanja usera
      users = await prisma.user.findMany({ take: 5 });
      usersTest = "SUCCESS";

      await prisma.$disconnect();
    } catch (err: any) {
      connectionTest = "FAILED";
      usersTest = "FAILED";
      error = {
        message: err.message,
        code: err.code,
        name: err.name,
      };
    }

    return NextResponse.json({
      status: "debug-info",
      server: "running",
      database: {
        connection: connectionTest,
        usersQuery: usersTest,
        userCount: users.length,
        users: users.map((u) => ({ name: u.name, email: u.email })),
        error: error,
      },
      debug: debugInfo,
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        status: "error",
        error: {
          message: err.message,
          name: err.name,
        },
      },
      { status: 500 },
    );
  }
}
