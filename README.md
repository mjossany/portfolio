# My Portfolio

Welcome to my <a href="https://jossany-portfolio-dev.herokuapp.com/">Portfolio</a>! It's a space that I created to share more about me, my skills and my projects. I hope you enjoy it! 😬

## Technologies

- JavaScript
- React
- Styled Components
- React Router Dom
- Jest

## Instructions to start locally

To facilitate the local deploy, we suggest using *Docker* and *Docker-compose*.

#### ⚠️ If you don't have Docker and Docker Compose installed:

- Check out the documentation and follow all the steps at [Docker documentation](https://docs.docker.com/engine/install/) and [Docker Compose documentation](https://docs.docker.com/compose/install/).

After installing both, run the following command in the project root:

`docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build`

This command runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Tests

This project has 100% unit tests coverage using jest and testing library.

To run tests locally use the command `npm test` and to verify the tests coverage run `npm run coverage`.

## Next Steps

- A backend to keep the projects of the portfolio and the blog posts;
- Improve the filtering options on the portfolio page;
- Modify the layout to give mobile users a more intuitive user interface;
- And give the user the option to translate the Portfolio to portuguese;

## Deploy

I chose [Heroku](https://www.heroku.com/) because it allows free deploy of personal projects and preserves the original routes.

<h1><a href="https://jossany-portfolio-dev.herokuapp.com/"> Visit my Portfolio</a></h1>





