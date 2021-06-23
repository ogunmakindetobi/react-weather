## WEATHER-APP

Solution by [Tobi Makinde](ogunmakindetobi@outlook.com)

# User Experience (UX)

## User stories.

- App is use for getting the current weather in any city across the world.
  [Search for cities and current location]
- Adding API to fetch the data of the weather.
- Use the state for the hook.
- function component to create the app.
- HTML to display the app.

## User

- Its help users to get current weather(i.e good weather or bad weather)
- App consists of a search-bar and click button
- its friendly use.

## Wireframes

- I Built this app with React.js with open source of weather api
  https://openweathermap.org/api

- Button from https://material-ui.com/

## Styling

# CSS

- Button (#f2f2f2 hover
  transform: scale(2);
  transition-duration: 0.5s )
- Background color (background-image: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.2),
  rgba(0, 0, 0, 0.75)
  );)

- Search bar with width 100.

- location box

- date

- weather-box .temp

- <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

## Styling

.

## Features:

- search- bar
- button
- display weather
- display date

## Technologies used.

### Languages Used

- HTML
- CSS
- REACT.JS
- API

## Deployment 🚀

--- GitHub Pages.
The project was deployed to GitHub Page and Netlify using the following steps...

- git add.
- git commit -m
- git push

1. Log in to GitHub and locate the GitHub Repository
2. Create a folder react-weather
3. git init, git commit -m "initial commit", git remote add origin https://github.com/username/new_repo , git push -u origin master.
   git push.
4. Use netlify for final deployment.
5. Log in to netlify add new and connect your Github.
6. Choose the file to deploy.

Then the site will be published.

To install the dependencies run:
`npm install`

And to run the app:

`npm start`

## yarn start

- Runs the app in the development mode.
- Open http://localhost:3000 to view it in the browser.

### Running the tests

#### Unit Tests

You can run the unit tests using:

`npm test`

### Error

- Location city suppose to be Dublin,ie not Dublin,US...The api sys. country api gives US.(due to the time range couldn't figure it out.)
