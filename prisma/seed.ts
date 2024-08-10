import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const courses = [
  {
    name: 'React Fundamentals',
    duration: 4,
    totalModules: 10,
    totalModulesCompleted: 3,
  },
  {
    name: 'React Advanced Concepts',
    duration: 6,
    totalModules: 12,
    totalModulesCompleted: 0,
  },
  {
    name: 'Node.js Essentials',
    duration: 5,
    totalModules: 8,
    totalModulesCompleted: 4,
  },
  {
    name: 'Express.js and RESTful APIs',
    duration: 4,
    totalModules: 7,
    totalModulesCompleted: 0,
  },
  {
    name: 'TypeScript for JavaScript Developers',
    duration: 3,
    totalModules: 6,
    totalModulesCompleted: 6,
  },
  {
    name: 'GraphQL with Apollo Server',
    duration: 5,
    totalModules: 9,
    totalModulesCompleted: 0,
  },
  {
    name: 'Vue.js 3 Crash Course',
    duration: 3,
    totalModules: 5,
    totalModulesCompleted: 0,
  },
  {
    name: 'Angular Fundamentals',
    duration: 5,
    totalModules: 10,
    totalModulesCompleted: 10,
  },
  {
    name: 'Full Stack Development with MERN',
    duration: 8,
    totalModules: 15,
    totalModulesCompleted: 0,
  },
  {
    name: 'Docker for Developers',
    duration: 4,
    totalModules: 7,
    totalModulesCompleted: 0,
  },
];

async function main() {
  console.log('Start seeding...');
  for (const course of courses) {
    const createdCourse = await prisma.course.create({
      data: course,
    });
    console.log(`Created course with id: ${createdCourse.id}`);
  }
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
