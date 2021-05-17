# Backend 
This Backend is build with Nx, NestJS, Prisma, PostgreSQL 
## Running the server

* From the root directory make sure to install all the required packages
* to run the server from the root run `nx serve server` (server is the name of the app).
* if no other port is defined it runs on port `:3333`

## View API documentation

* from wherever you run the server (host, port) from your browser visit the `/api/docs` endpoint.

## Authentication
Authentication flow: 

To log a user in perform a `GET` request to the endpoint `/api/auth/facebook`.
If the user is not already authenticated it will prompt the user to allow KICKOFF 
to access the profile and redirect the user to *currenty* `/api/auth/facebook/redirect` (subject to change). This will create a session and attach it to the users browser.

IMPORTANT

Once you restart the server the Session-Cookie will be invalid and the user needs to be signed in again via `GET /api/auth/facebook` this will redirect again even without asking the permission again. 

*Due to the changes in the User schema, running a migration will be necessary.*


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
