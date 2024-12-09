import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid2, Typography } from '@mui/material';
import React from 'react'

const MyCards = ({image }) => {
  return (
    <Grid2 size={{ xs: 12, md: 4 }}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            height:233,
            width:{sx:250 ,md:320}
          }}
          
          image={image}
          alt
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Shop
        </Button>
      </CardActions>
    </Card>
    </Grid2>
  );
 
}

export default MyCards;