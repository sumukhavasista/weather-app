
import { Box, TextField, Button }from '@mui/material';
import React from 'react';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";



const Search = ({fetchWeather}) => {

  

    const [searchCity, setSearchCity] = useState('')

  return (
    <Box sx={{width: '100%', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    msFlexDirection: 'coloumn',
    mt: '25px'}}>

      <Box sx={{ display: 'flex', width: '100%' }}>
        <TextField 
        sx={{ width: '100%' }} 
        label="Enter your location" 
        autoComplete='off'
        value={searchCity}
        onChange={(e) => {setSearchCity(e.target.value)}} />

        <Button 
        sx={{ backgroundColor: "dimgrey", 
        boxShadow: "none", 
        borderRadius: '18px',
        ml:'24px',
        '&:hover':{backgroundColor: "dimgrey", borderRadius: '18px'},
        }}
         variant="contained"
         onClick={() => {fetchWeather(searchCity)}}
         >
          <FaSearch />
         </Button>

      </Box>
    </Box>
    
    
  )
}

export default Search
