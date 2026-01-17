import { NextResponse } from "next/server";
import { Pool } from "pg";

// Loguj da vidiš da li se varijabla učitava
console.log("DATABASE_URL:", process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET() {
  try {
    const result = await pool.query("SELECT NOW()");
    return NextResponse.json({ time: result.rows[0].now });
  } catch (error) {
    // Loguj ceo error da vidiš šta se dešava
    console.error("DB error:", error);
    return NextResponse.json(
      { error: String(error) }, // koristi String(error) da ne bude prazan
      { status: 500 },
    );
  } finally {
    // Ako testiraš lokalno, možeš zatvoriti pool da ne ostane otvoren
    // await pool.end();
  }
}
