

# Kickoff
- A sports-social media app, based on what your activities your friends plan next.

If you've ever felt the need to go out and play some basketball but wanted to join a local match, rather than
shooting hoops in your backyard, then Kickoff is the right app for you!

The long term vision of this project is to bring people from a community together for sports activities.
Want to organize a match at your local sports ground? Then create an activity, with a title, location, and a time.

Friends and other users close to that location can see the activity and join you with a press of a button.

## Feature List implemented | planned 
- [x] UI connecting to server
- [x] Mobile friendly UI
- [x] Create activites
- [x] Join Activities
- [x] Login with Facebook
- [ ] Get local events
- [ ] Add friends

Feel free to contribute!

## Tech Stack

We love TypeScript!

#### MonoRepo
https://nx.dev/

### Frontend

#### React
https://reactjs.org/

#### Axios
https://axios-http.com/


### Backend

#### NestJS
https://docs.nestjs.com


#### Prisma
https://prisma.io


#### PostgreSQL
https://www.postgresql.org/


##  Development servers

There are a few steps to get it running.

Run `npm install` on the root directory to install all necessary dependencies.

### Backend 
The server needs some environment variables
For FB OAuth2: generate clientID secret and place it in a .env file as well as a Postgres Database connection.
Further instructions are listen in the [servers own Readme](https://github.com/ChristianSchmutte/kickoff/blob/master/apps/server/readme.md)

### Frontend
Run `npx nx serve client` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Contributors
@all-contributors add
