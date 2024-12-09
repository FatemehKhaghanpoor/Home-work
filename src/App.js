import AppleWatch from "./asset/style/image/617iJDEDBFL.jpg"
import EarPod from "./asset/style/image/1(34).jpg"
import Iphone from "./asset/style/image/download.jpg"
import MyCards from "./component/cards";

import "./index.css";
import { Box, Container, Grid2 } from "@mui/material";
import HeaderComponent from "./component/header";
const cardList=[
  {
    id:1,
    title:"iphone",
    caption:"LuFolderMinus;sal;mxkmnjshdsjacxb",
    image:Iphone
  },
  {
    id:2,
    title:"Earpod",
    caption:"LuFolderMinus;sal;mxkmnjshdsjacxb",
    image:EarPod
  },
  {
    id:3,
    title:"Apple watch",
    caption:"LuFolderMinus;sal;mxkmnjshdsjacxb",
    image:AppleWatch
  }
];

function App() {
  return (
    <Container>
      <HeaderComponent/>
     
    <Box sx={{display:"flex", direction:"row", gap:3}} >
    <Grid2 container spacing={2}>
    {cardList.map((item)=><MyCards image={item.image} key={item.id}/>) }
    </Grid2>
    </Box>
    
    </Container>
  );
}

export default App;
