import * as React from 'react';
import Badge  from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




 function BadgeComponent() {
    const shopList =useSelector((state)=>state.shopList.items)
  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={shopList?.length} color="warning">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}
export default BadgeComponent;
