## WEATHER-APP

Solution by [Tobi Makinde](ogunmakindetobi@outlook.com)

# User Experience (UX)

## User stories.

- This app is for getting the current weather in any city accross the world.
  [Search for cities and current location]

## User

- Its help users to get current weather(i.e good weather or bad weather)
- App consist of search-bar and click button

## Wireframes

- i Build this app with React.js with open source for weather api
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

- Navbar
- Contact form
- map
- images

## Technologies used.

### Languages Used

- HTML
- CSS
- REACT.JS

## Testing

## Deployment 🚀

--- GitHub Pages.
The project was deployed to GitHub Pages using the following steps...

- git add.
- git commit -m
- git push

1. Log in to GitHub and locate the GitHub Repository
2. At the top of the Repository (not top of page), locate the "Settings".
3. Alternatively Click Here for a GIF demonstrating the process starting from Step 2.
4. Scroll down the Settings page until you locate the "GitHub Pages" Section.
5. Under "Source", click the dropdown called "None" and select "Master Branch".
6. The page will automatically refresh.
7. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

its will push and then go in to the github settings and went down to Source and click on Branch Master and click on Master.
Then the site will be publish.

## acknowlagement

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

#### Integration Tests

To run Cypress in interactive mode run:

`npm run cy:start`

### Error

- Location city suppose to be Dublin,ie not Dublin,US...The api sys.country api gives US.(due to the time range couldnt figure it out.)
