# Weatherify (Weather App)

WeatherApp is a React-based web application designed to fetch and display real-time weather data for any location in the world. The app is built using the Vite development tool, providing a fast and lean development experience. It integrates a weather API to pull current weather and forecast data, offering a responsive, user-friendly and aesthetically pleasing interface.

 <a href="https://www.youtube.com/watch?v=r4bw6uGxC4Y">View Demo</a>

 ## Table of Contents

 - <a href="https://github.com/francesschisom/weatherify_weatherapp/blob/main/README.md#technologies-used">Technologies used</a>

- <a href="https://github.com/francesschisom/weatherify_weatherapp/blob/main/README.md#features">Features</a>

- <a href="https://github.com/francesschisom/weatherify_weatherapp/blob/main/README.md#installations">Installations</a>

- <a href="https://github.com/francesschisom/weatherify_weatherapp/blob/main/README.md#development-process">Development Process</a>

- <a href="https://github.com/francesschisom/weatherify_weatherapp/blob/main/README.md#usage-instructions">Usage-Instructions</a>

- <a href="https://github.com/francesschisom/weatherify_weatherapp/blob/main/README.md#css-styling">CSS Styling</a>

- <a href="https://github.com/francesschisom/weatherify_weatherapp/blob/main/README.md#api-intergration">API Intergration</a>

- <a href="https://github.com/francesschisom/weatherify_weatherapp/blob/main/README.md#future-improvements">Future Improvements</a>

 ## Technologies used

-  **React:** A JavaScript library for building interactive user interfaces.

-  **Vite:** A fast build tool and development server for modern web projects.

-  **CSS (Custom Styling):** Used for responsive and adaptive styling of the application.

-  **Weather API:** Used to fetch real-time weather data based on user location or city search.

-  **JavaScript (ES6+):** For handling logic and interactivity.

-  **Git:** Version control system for managing the codebase.

-  **Axios/Fetch:** For handling API requests.

-  **npm:** Node package manager to manage dependencies and scripts.

## Features

- **Real-Time Weather Data:** Fetches current weather conditions for any location based on user input.

- **City Search:** Users can manually search for the weather by city name.

- **Weather Forecast:** Displays weather forecast with temperature, humidity, wind, and weather conditions.

- **Dynamic Background:** Change the background color or image based on the weather conditions (sunny, rainy, snowy, etc.).

- **Loading States:** Shows an animated loader (loading GIF) while weather data is being fetched.

- **Error Handling:** Displays meaningful error messages for incorrect city names or API failures.

- **Responsive Design:** Optimized for various screen sizes (mobile, tablet, desktop).

## Installations



## Development Process

1. **Initial Setup**

- The project was initialized using Vite for a faster, streamlined development experience.

- React components were used to build a modular and reusable UI.

2. **Weather Data Integration**

- OpenWeatherMap API was integrated to fetch real-time weather information.

-  Data is fetched based on either the user’s location (default location) or a manual city search.

-  Error handling is implemented to manage failed requests or incorrect input (e.g., “City not found”).

3. **State Management**

- React’s useState and useEffect hooks are utilized to manage application state for user input, API data, and loading/error states.

- The app optimizes API requests to minimize unnecessary re-fetching of weather data.

4. **Component Design**

- **SearchBar Component:** Handles user input and triggers weather data fetch on search.

- **CurrentWeather Component:** Displays current weather details (temperature, humidity, weather condition).

- **Forecast Component:** Shows the day weather forecast.

- **Loading and Error Components:** Used to display loading indicators and error messages.

## Usage Instructions

1. **Searching for a City**

- Enter a city name in the search bar, press Enter or click the search button to get weather data.

- The app will display the current weather condition, temperature, humidity and windspeed of the location manually inputed in the search bar.

## CSS Styling

1. **Responsive Design**

- The CSS for the weather app is fully responsive, ensuring that the app adapts to different screen sizes, including mobile, tablet, and desktop.

- Flexbox and media queries are used extensively to handle layout adjustments.

2. **Custom Animations and Styling**

- Gradients and CSS animations are applied to elements such as the weather icons and background.
Loading states (loading GIF) are styled with custom animations, enhancing user experience while data is being fetched.

## API Intergration

## Future Improvements

