import { config } from "dotenv";

// Ensure DATABASE_URL is loaded for the seed script.
// Next.js loads `.env.local` automatically, but `tsx`/Node does not.
config({ path: ".env" });
config({ path: ".env.local", override: false });

async function main() {
  const { default: prisma } = await import("../lib/prisma");

  const email = "milha@example.com";

  await prisma.user.upsert({
    where: { email },
    update: {
      name: "Milha1",
    },
    create: {
      name: "Milha1",
      email,
    },
  });

  console.log("Seed completed.");

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
