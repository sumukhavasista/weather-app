import React from 'react';
import { useState, useEffect } from 'react';
import { Box, CircularProgress, createTheme, ThemeProvider } from '@mui/material';
import Search from "./components/Search";
import Main from "./components/Main";
import Widgets from "./components/Widgets";
import axios from "axios";
import ErrorPage from './components/ErrorPage';



const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat"]
  },
  palette: {
    primary: {
      main: '#DB5A42'
    },
    secondary: {
      main: '#DB5A42'
    }
  }
});

function App() {

  const [weatherData, setWeatherData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const defaultCity = localStorage.getItem('city')?  localStorage.getItem('city') : 'Bengaluru';
  

  useEffect(() => {
    fetchWeather(defaultCity)
  })


  const fetchWeather = async (city) => {
    setLoading(true);
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b0b9ae8a7f80ebdb7907353a7a7fe084`)
      .then((response) => {
        console.log(response.data)
        setWeatherData(response?.data);
        localStorage.setItem('city', response?.data?.name)
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        console.log(error)
        setError(true);
        setLoading(true)
      })
  }




  return (
    <ThemeProvider theme={theme}>
      {loading ? <Box sx={{display: 'flex', justifyContent: 'center', alignItems:'center', height:'100vh'}}>
        <CircularProgress />
      </Box> : <Box
        sx={{
          display: 'flex',
          maxWidth: '550px',
          width: '90%',
          justifyContent: 'center',
          margin: 'auto',
          flexDirection: 'column'
        }}>
        <Search fetchWeather={fetchWeather} />

        {error ? (<ErrorPage /> ) : ( <> 
        <Main 
        city={weatherData?.name} 
        country={weatherData?.sys?.country} 
        icon={weatherData?.weather[0]?.icon} 
        temp={weatherData?.main?.temp} 
        weatherDescription={weatherData?.weather[0]?.description} />

        <Widgets 
        temp={weatherData?.main?.temp} 
        feelsLike={weatherData?.main?.feels_like} 
        humidity={weatherData?.main?.humidity} 
        wind={weatherData?.wind?.speed}/>
        </>)}
       
        
      </Box>}
    </ThemeProvider>
  );
}

export default App;
