import "dotenv/config";
import prisma from "../lib/prisma";

async function main() {
  await prisma.user.create({
    data: {
      name: "Milha",
      email: "milha@example.com",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
