import {
  Box,
  ButtonGroup,
  Divider,
  Drawer,
  IconButton,
  List,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import MyCards from "../cards";
import { useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useDispatch } from "react-redux";
import { addOne, deleteItem, minusOne } from "../../store/actions/shopaction";


const DrawerComponent = ({ openDrawer, toggleDrawer, item }) => {
  const shopList = useSelector((state) => state.shopList.item);
  const dispatchAdd = useDispatch();
  const handleAdd = (e, cardInfo) => {
    cardInfo.count++;
    dispatchAdd(addOne(cardInfo));
  };
  const dispatchMinus = useDispatch();
  const handleMinus = (e, cardInfo) => {
    cardInfo.count--;
    dispatchMinus(minusOne(cardInfo));
  };
  const dispatchDelet = useDispatch();

  const handleDelete = (e, cardInfo) => {
    dispatchDelet(deleteItem(cardInfo));
  };
  const DrawerList = (
    <Box
      sx={{ width: 250, padding: 2 }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      {shopList.map((item) => (
        <Box key={item.id}>
          <Typography> Shop List</Typography>
          <List>
            <MyCards info={item} key={item.id}>
              {/* <Typography> count: {item.count} </Typography> */}
              <ButtonGroup variant="outlined" aria-label="Basic button group">
                <IconButton
                  aria-label="add"
                  onClick={(e) => {
                    handleAdd(e, item);
                  }}
                  disabled={item.count > 29}
                >
                  <AddIcon />
                </IconButton>
                <Typography sx={{ margin: 2 }}> {item.count}</Typography>
                <IconButton
                  aria-label="remove"
                  onClick={(e) => {
                    if(item.count>1){
                    handleMinus(e, item);} else{
                      handleDelete(e,item);
                    }
                    

                  }}
                >
                  <RemoveIcon />
                </IconButton>
              </ButtonGroup>
              {item.count > 29? <Typography sx={{backgroundColor:"aqua" ,padding:2}}>You cant add more than 30 items </Typography>:""}
            </MyCards>
          </List>
          <Divider />
        </Box>
      ))}
    </Box>
  );

  return (
    <div>
      <Drawer open={openDrawer} onClose={toggleDrawer(false)} anchor="right">
        {shopList.length === 0 ? (
          <Fragment>
            <Box
              sx={{
                width: 250,
                padding: 2,
                backgroundColor: "aqua",
                margin: 4,
              }}
              role="presentation"
              onClick={toggleDrawer(false)}
            >
              <Typography> Shop List Is Empty!!</Typography>
            </Box>
          </Fragment>
        ) : (
          DrawerList
        )}
      </Drawer>
    </div>
  );
};

export default DrawerComponent;
