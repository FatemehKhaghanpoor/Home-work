import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid2, Typography } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/actions/shopaction';

const MyCards = ({info }) => {
  // const shopList =useSelector((state)=>state.shopList)
  const dispatch =useDispatch()
  
  const handleShop =(e,cardId)=>{
    dispatch(addItem(cardId))
  }
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
          
          src={info.image}
          alt
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {info.caption}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={(e)=>{handleShop(e, info.id)}}>
          Shop
        </Button>
      </CardActions>
    </Card>
    </Grid2>
  );
 
}

export default MyCards;