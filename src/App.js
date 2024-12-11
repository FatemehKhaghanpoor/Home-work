import EarPod from "./asset/style/image/1(34).jpg";
import AppleWatch from "./asset/style/image/617iJDEDBFL.jpg";
import Iphone from "./asset/style/image/download.jpg";
import MyCards from "./component/cards";

import { Button, CardActions, Container, Grid2 } from "@mui/material";
import React, { useState } from "react";
import DrawerComponent from "./component/drawer";
import HeaderComponent from "./component/header";
import "./index.css";
import { addItem  } from "./store/actions/shopaction";
import { useDispatch} from "react-redux";
const cardList = [
  {
    id: 1,
    title: "iphone",
    caption: "LuFolderMinus;sal;mxkmnjshdsjacxb",
    image: Iphone,
  },
  {
    id: 2,
    title: "Earpod",
    caption: "LuFolderMinus;sal;mxkmnjshdsjacxb",
    image: EarPod,
  },
  {
    id: 3,
    title: "Apple watch",
    caption: "LuFolderMinus;sal;mxkmnjshdsjacxb",
    image: AppleWatch,
  },
];

function App() {
  const dispatch = useDispatch();

  const handleShop = (e, cardInfo) => {
    dispatch(addItem(cardInfo));
  };
 
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };
 
  return (
    <Container>
      <HeaderComponent toggleDrawer={toggleDrawer} />
      <DrawerComponent toggleDrawer={toggleDrawer} openDrawer={openDrawer} />

      <Grid2 container spacing={2}>
        {cardList.map((item) => (
          <MyCards info={item} key={item.id}>
            <CardActions>
              <Button
                size="small"
                color="primary"
               
                  
                
                onClick={(e) => {
                 
                  handleShop(e, item);
                }}
              >
                Shop
              </Button>
            </CardActions>
          </MyCards>
        ))}
      </Grid2>
    </Container>
  );
}

export default App;
