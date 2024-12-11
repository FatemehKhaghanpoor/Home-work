import * as React from 'react';
import Badge  from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




 function BadgeComponent({toggleDrawer}) {
    const shopList =useSelector((state)=>state.shopList.item);

    const countShop = shopList.reduce((sum,curr)=>{
      return( sum+=curr.count);
     },0);
    
     
    
    
  return (
    <IconButton aria-label="cart" onClick={toggleDrawer(true)}>
      <Badge badgeContent={countShop} color="warning">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}
export default BadgeComponent;
