import React, { Fragment} from "react";
import { URL } from "../../constant";
import CardCountry from "../countryCard";
import { Box, Grid2 } from "@mui/material";
let response = await fetch(URL);
 export const country= await response.json()

console.log(typeof(Object.keys(country)));
console.log(country[1]);
const countyArray =Object.keys(country);
// console.log(country[0].name.common);
// console.log(typeof(country[0]))
// console.log(country[0].name.common);


// console.log(Object.keys(country[0]));



const Main = () => {
 
  return (
   <Fragment> 
    <Box
   sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
     {
      countyArray.map((key)=>(
 <Grid2 size={3} key={key}>
               <CardCountry  keyCountry={key}/> 
         </Grid2> 
      ))
     }
           
 
        
        
        </Grid2>
        </Box>
  
   
   </Fragment > 
   
  );
};
export default Main;
