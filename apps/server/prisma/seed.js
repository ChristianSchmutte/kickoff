import Prisma from '@prisma/client'
const { PrismaClient } = Prisma
const prisma = new PrismaClient();

async function main() {
  
  const sport = await prisma.sport.create({ data: { title: 'Basketball' } });
  const location = await prisma.location.create({
    data: {
      latitude: 52.4903181,
      longitude: 13.3586065,
      name: 'Kurt-Hiller-Park',
    }
  });

  const user = await prisma.user.create({
    data: {
      username: 'Lenny Leonard',
      oauthId: 'abcdefghijlkmnopqrstuvwxyz',
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