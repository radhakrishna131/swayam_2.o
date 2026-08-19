import { Difficulty, PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const university = await prisma.university.upsert({
    where: { name: 'IIT Madras' },
    update: {},
    create: { name: 'IIT Madras', verified: true },
  });

  const seedPassword = process.env.SEED_SUPER_ADMIN_PASSWORD ?? 'local-development-admin-password';
  const passwordHash = await bcrypt.hash(seedPassword, 12);

  await prisma.user.upsert({
    where: { email: 'admin@swayam2.ai' },
    update: { passwordHash },
    create: {
      email: 'admin@swayam2.ai',
      name: 'Platform Super Admin',
      roles: [Role.SUPER_ADMIN],
      passwordHash,
    },
  });

  await prisma.course.upsert({
    where: { slug: 'ai-for-public-health' },
    update: {},
    create: {
      slug: 'ai-for-public-health',
      title: 'AI for Public Health',
      description: 'Use responsible AI to improve population health outcomes.',
      difficulty: Difficulty.INTERMEDIATE,
      language: 'en',
      rating: 4.9,
      universityId: university.id,
    },
  });
}

main().finally(() => prisma.$disconnect());
