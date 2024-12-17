import React, { Fragment } from "react";
import { URL } from "../constant/index";
import CardCountry from "../component/countryCard";
import { Box, Grid2 } from "@mui/material";
import { Link } from "react-router";
import { INFO_RAW_ROUTE } from "../constant/routes";

let response = await fetch(URL);

export const country = await response.json();


export const countyArray = Object.keys(country);


const Home = () => {
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid2 container spacing={2}>
          {countyArray.map((key) => (
            <Grid2 size={3} key={key}>
              <Link to={`${INFO_RAW_ROUTE}/${country[key].cca3}`}>
                <CardCountry keyCountry={key} />
              </Link>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Fragment>
  );
};
export default Home;
