import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { country } from '../../pages/home'; 

const CardCountry = ({keyCountry}) => {
  return (
    <Card sx={{  maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={country[keyCountry].flags.png}
      title={country[keyCountry].name.common}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {country[keyCountry].name.common}
      </Typography>
      
    </CardContent>
   
  </Card>
  )
}

export default CardCountry