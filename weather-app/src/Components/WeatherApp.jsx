/*The below code defines the WeatherApp component, 
which manages the weather data fetching, display, 
and user interaction for the weather application.
*/

/*Imports images for different weather conditions*/
import sunny from '../assets/images/sunny.png'
import cloudy from '../assets/images/cloudy.png'
import rainy from '../assets/images/rainy.png'
import snowy from '../assets/images/snowy.png'
import loadingGif from '../assets/images/loading.gif'
import { useState, useEffect } from 'react'  

/*API key for the Open Weather Map API (api_key)*/
const WeatherApp = () => {
    /*data state variable stores the fetched weather data using useState*/
    const [data, setData] = useState ({})
    /*location state variable stores the user-entered location using useState */
    const [location, setLocation] = useState('')
    /*loading state variable indicates if data is being fetched using useState */
    const [loading, setLoading] = useState(false)
    const api_key = '0c3f683e2577f800f5a0b2816138d08f'

    /*Fetching Weather Data (useEffect)*/
    useEffect(() => {
        const fetchDefaultWeather = async () => {
          /*Sets loading to true while fetching*/
          setLoading(true)
          /*The useEffect hook fetches weather data for a default location ("Lagos") on component mount.*/
          const defaultLocation = 'Lagos'
          /*It constructs the API URL, fetches data, and updates the data state*/
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=Metric&appid=${api_key}`
          const res = await fetch(url)
          const defaultData = await res.json()
          setData(defaultData)
          /*Sets loading to false after receiving data*/
          setLoading(false)
        }
        fetchDefaultWeather()
      }, [])
    /*Updates the location state based on user input in the search bar*/
    const handleInputChange = (e) => {
        setLocation(e.target.value)
    }
    /*Fetches weather data based on the user-entered location*/
    const search = async () => {
        if (location.trim() !== "") {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`
            const res = await fetch(url)
            const searchData = await res.json()
            /*If location is not found (status code != 200), sets data.notFound to true*/
            if (searchData.cod !== 200) {
              setData({notFound: true}) 
              /*Otherwise, updates data with the fetched data and clears the location state*/
            } else {
              setData(searchData)
              setLocation('') 
            }
            /*Sets loading to false after processing the response*/
            setLoading(false)
        }
    }

    /*Triggers the search function when the user presses Enter in the search bar*/
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            search () 
        }
    }

    /*Weather Condition mapping*/
    /*object maps weather descriptions (Clear, Clouds, etc.) to corresponding image import*/
    const weatherImages = {
        Clear: sunny,
        Clouds: cloudy,
        Rain: rainy,
        Snow: snowy,
        Haze: cloudy,
        Mist: cloudy,
    }

    /*retrieves the appropriate weather image based on the fetched data*/
    const weatherImage = data.weather ? weatherImages[data.weather[0].main] : null

    /*Background Image <Mapping></Mapping*/
    /*object maps weather descriptions to corresponding background gradients*/
    const backgroundImages = {
        Clear: 'linear-gradient(to right, #f3b07c, #fcd283)',
        Clouds: 'linear-gradient(to right, #57d6d4, #71eeec)',
        Rain: 'linear-gradient(to right, #5bc8fb, #80eaff)',
        Snow: 'linear-gradient(to right, #aff2ff, #fff)',
        Haze: 'linear-gradient(to right, #57d6d4, #71eeec)',
        Mist: 'linear-gradient(to right, #57d6d4, #71eeec)',
    }

    /*retrieves the appropriate background image based on the fetched data, adjusting the gradient direction*/
    const backgroundImage = data.weather 
      ? backgroundImages[data.weather[0].main] 
      : 'linear-gradient(to right, #f3b07c, #fcd283)'


      /*Fromatting Date*/
       const currentDate = new Date()

       /*Extracts day of the week, month, and day of the month from the current date*/
       const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]

       const months = [
         'Jan',
         'Feb',
         'Mar',
         'Apr',
         'May',
         'Jun',
         'Jul',
         'Aug',
         'Sep',
         'Oct',
         'Nov',
         'Dec',
        ]

        /*combines these values into a human-readable format*/
       const dayOfWeek = daysOfWeek[currentDate.getDay()]
       const month = months[currentDate.getMonth()]
       const dayOfMonth = currentDate.getDate()

       const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`

  return (
    /*combines these values into a human-readable format*/
    <div className="container" style={{ backgroundImage }}>
        <div
          className="weather-app" 
          style={{ 
            backgroundImage: 
              backgroundImage && backgroundImage.replace 
                ? backgroundImage.replace("to right", "to top") 
                : null,
          }}
        >
          `The weather app container displays the search section, weather information, and additional data based on the fetched data and loading state`
            <div className="search">
              
                <div className="search-top">
                    <i className="fa-solid fa-location-dot"></i>
                <div className="location">{data.name}</div>
                </div>
                <div className="search-bar">
                    <input
                     type="text"
                     placeholder="Enter Location"
                     value={location}
                     onChange={handleInputChange}
                     onKeyDown={handleKeyDown}
                      />
                    <i className="fa-solid fa-magnifying-glass"onClick={search}></i>
                </div>
            </div>
            {loading ? (<img className='loader' src={loadingGif} alt='loading' />) : data.notFound ? (
                <div className="not-found">Not Found 😒</div>
            ) : (
               <>
                <div className="weather">
                  <img src={weatherImage} alt="sunny" />
                  <div className="weather-type">{data.weather ? 
                  data.weather[0].main : null}</div>
                  <div className="temp">{data.main ? `${Math.floor (data.main.temp)}°` : null}</div>
           </div>
           <div className="weather-date">
               <p>{formattedDate}</p>
           </div>
           <div className="weather-data">
               <div className="humidity">
                   <div className="data-name">Humidity</div>
                   <i className="fa-solid fa-droplet"></i>
                   <div className="data">{data.main ? data.main.humidity : null}%</div>
               </div>
               <div className="wind">
                   <div className="data-name">Wind</div>
                   <i className="fa-solid fa-wind"></i>
                   <div className="data">{data.wind ? data.wind.speed : null} km/h</div>
               </div>
           </div>
          </> 
         )}
        </div>
    </div>
  )
}

export default WeatherApp