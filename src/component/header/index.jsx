import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { NavLink } from "react-router";
import {
    
    HOME_ROUTE,
    

  } from "../../constant/routes";

  export default function HeaderComponent() {return (
    <Box sx={{ flexGrow: 1, width: 1 }}>
      <AppBar position="static">
        <Toolbar className="flex justify-between items-between w-full">
       
            <NavLink to={HOME_ROUTE}>
             Home
            </NavLink>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}
