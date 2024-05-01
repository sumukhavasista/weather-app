import React from 'react'
import ErrorImage from '../assets/errorImage.png'
import {Box, Typography} from '@mui/material'

const ErrorPage = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: '24px' }}>
      <Box>
        <Box sx={{ height: '240px' }} component='img' src={ErrorImage} />
        <Typography sx={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold', color: 'black' }}>
          Sorry, we couldn't find the city
        </Typography>
      </Box>
    </Box>
  )
}

export default ErrorPage
