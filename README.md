# Redo Wine 🍷

A personal redo of a wine shop project that I already had worked.

## Why ?

I always had interest in design, on how things looked and feeled and the experience that was translated to the user. 
So Since I started working, I always wanted to know how the project I was working would look like if I design it.

That's why I started this mini-projects.

The objective is to create a fully functional site, like the original one, with an API (mocked or a real) that would allow the user to do all kinds of stuff. 

- Register and Login.
- Purchase products and subscribe to services. 
- Have an account dashboard.


Of course all the products and services will be fake, but the core logic would be working.

These projects will also allow me to explore some new technologies and get in-depth of some of the areas of that I haven't work as much. 

## Technologies

To create this project I will use:

- [Node](https://nodejs.org) - Serve the static assets and the build the server side rendering
- [Yarn](https://yarnpkg.com) - NPM with steroids
- [React](https://reactjs.org) (what else? 😏) 
- [Redux](https://redux.js.org) - Global application state
- [Styled components](https://www.styled-components.com) - Style(CSS) + Components = 💥
- [Webpack](https://webpack.js.org) - Cook the JS and the assets...
- [Jest](https://jestjs.io) - JS testing lib
- [Enzyme](https://airbnb.io/enzyme/) - Test utils to help with the Components Testing
- [Docz](https://www.docz.site) - Document the components
- [Docker](https://www.docker.com) - Build and serve the project in the ☁️

## Quick start

### Installation

```bash
    $ git clone https://github.com/andrealmieda/redo-wine-project
    $ yarn install
```

### Run the project

```bash
    # to run the site in dev-mode (with hot-reload) 👀
    $ yarn watch

    # to run the project in production-mode, you have to build it first
    $ yarn build
    # and then
    $ yarn start
```

I will also add the docker instructions later 😉

## Progress

- [x] Create main folder structure.
- [X] Create node server for development.
- [ ] Create node server for production.
- [X] Create Webpack configuration for development.
- [ ] Create Webpack configuration for production.
- [X] Add Server side rendering.
- [X] Add linting to the project.
- [X] Add Jest testing to the project.
- [X] Add Docz to the project.
- [X] Add Redux to the project.
- [X] Add Styled-Component to the server side render.
- [ ] Add Dockerfile and docker-compose files.
- [ ] Add mocked data API.
- [ ] Add middleware to fill redux SSR state.
