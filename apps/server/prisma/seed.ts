import * as Prisma from '@prisma/client'
const { PrismaClient } = Prisma
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      firstname: 'John',
      lastname: 'Doe',
    },
  });
  const sport = await prisma.sport.create({ data: { title: 'Basketball' } });
  const location = await prisma.location.create({
    data: {
      latitude: 52.4903181,
      longitude: 13.3586065,
      name: 'Kurt-Hiller-Park',
    }
  });

  await prisma.user.create({
    data: {
      firstname: 'Lenny',
      lastname: 'Leonard',
    },
  });

  await prisma.user.create({
    data: {
      firstname: 'Carl',
      lastname: 'Carlson',
    },
  });
  await prisma.user.create({
    data: {
      firstname: 'Barney',
      lastname: 'Gumbles',
    },
  });
  await prisma.user.create({
    data: {
      firstname: 'Kent',
      lastname: 'Brockman',
    },
  });
  await prisma.user.create({
    data: {
      firstname: 'Moe',
      lastname: 'Szyslak',
    },
  });
  await prisma.user.create({
    data: {
      firstname: 'Montgomery',
      lastname: 'Burns',
    },
  });
  await prisma.user.create({
    data: {
      firstname: 'Seymour',
      lastname: 'Skinner',
    },
  });
  await prisma.activity.createMany({
    data: [
      { 
        title: 'Soccer in Park ',
        description: 'Bring ball, have func',
        organizerId: user.id,
        locationId: location.id,
        sportId: sport.id,
        timestamp: Date.now(),
        ends: Date.now() + 86400,
      },
      { 
        title: 'Bball in Park ',
        description: 'Bring ball, have func',
        organizerId: user.id,
        locationId: location.id,
        sportId: sport.id,
        timestamp: Date.now(),
        ends: Date.now() + 86400,
      },
      { 
        title: 'Cricket in Park ',
        description: 'Bring ball, more fun',
        organizerId: user.id,
        locationId: location.id,
        sportId: sport.id,
        timestamp: Date.now(),
        ends: Date.now() + 37840,
      },
      { 
        title: 'Soccer in Park ',
        description: 'Bring ball, have func',
        organizerId: user.id,
        locationId: location.id,
        sportId: sport.id,
        timestamp: Date.now(),
        ends: Date.now() + 86400,
      },
      { 
        title: 'Soccer in Park ',
        description: 'Bring ball, have func',
        organizerId: user.id,
        locationId: location.id,
        sportId: sport.id,
        timestamp: Date.now(),
        ends: Date.now() + 54350,
      },
    ]
  });
}

main()
.catch((error) => {
  console.error(error);
  process.exit(1);
})
.finally(async () => {
  await prisma.$disconnect();
})