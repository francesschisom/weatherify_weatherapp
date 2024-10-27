/*imports the WeatherApp component*/
import WeatherApp from "./Components/WeatherApp"
/*imports the CSS styles associated with the WeatherApp component */
import "./Components/WeatherApp.css"
/*defines a functional component named App*/
const App = () => {
  /*returns the JSX structure to be rendered*/
  return (
    /*renders the WeatherApp component, which is responsible for displaying weather information*/
      <div>
          <WeatherApp />
      </div>
  )
}

export default App