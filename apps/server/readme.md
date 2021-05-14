# Backend 
This Backend is build with Nx, NestJS, Prisma, PostgreSQL 
## Running the server

* From the root directory make sure to install all the required packages
* to run the server from the root run `nx serve server` (server is the name of the app).
* if no other port is defined it runs on port `:3333`

## View API documentation

* from wherever you run the server (host, port) from your browser visit the `/api/docs` endpoint.

## Database

### Seeding the database

Prisma provides a way to generate initial data into your localdatabse for development.
The seed data is generated `seed.ts` inside `apps/server/prisma`, where you also can have a look at the schema itself.

How to seed:

* Make sure PostgreSQL is installed locally, or in a Docker Container ([Local](postgresql.org/download/), [Docker](https://hub.docker.com/_/postgres))
* install all npm packages 
* provide a `DATABASE_URL` within a `.env` file for prisma to connect to
* run `npx prisma generate` to generate the db client.
* to seed the database run `npx prisma db seed --preview-feature` inside `apps/server`.

### Inspect your tables
To view/edit the data inside your tables you can run `npx prisma studio` inside `apps/server`, which provides a admin tool inside the browser running on `http://localost:5555` on default.
Alternativley use your SQL management tool of choice.
