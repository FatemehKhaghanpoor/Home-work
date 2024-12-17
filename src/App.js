import { Container } from "@mui/material";



import "./index.css";
import { Routes, Route } from "react-router";

import { HOME_ROUTE, INFO_ROUTE } from "./constant/routes";
import Home from "./pages/home";
import Info from "./pages/information";
import HeaderComponent from "./component/header";

function App() {
  return (
    <Container>
      <HeaderComponent/>
      <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path={INFO_ROUTE} element={<Info />} />
      </Routes>
    </Container>
  );
}

export default App;
