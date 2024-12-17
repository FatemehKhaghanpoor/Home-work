import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { country, countyArray } from "./home";
import { useNavigate, useParams } from "react-router";
import { HOME_ROUTE } from "../constant/routes";

export default function InformationComponent() {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate(HOME_ROUTE);
  };
  const params = useParams();

  const handleFindCountry = () => {
    return countyArray.find(
      (key) => country[key].cca3 === params.selectedCountry
    );
  };

  let findKey = handleFindCountry();

  return (
    <Card sx={{ maxWidth: 345 }} className="ml-72  mt-6">
      <CardContent>
        <Typography component="div" variant="h5">
          {country[findKey].name.common}
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ color: "text.secondary" }}
        >
          <span>
            <p>
              <span className="font-bold">capital : </span>
              {country[findKey].capital}
            </p>
          </span>

          <span>
            <p>
              <span className="font-bold">region : </span>
              {country[findKey].region}
            </p>
          </span>
          <span>
            <p>
              <span className="font-bold">population : </span>
              {country[findKey].population}
            </p>
          </span>
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 140 }}
        image={country[findKey].flags.png}
        title={country[findKey].name.common}
      />

      <CardActions>
        <Button size="large" onClick={handleGoHome}>
          Back to Home
        </Button>
      </CardActions>
    </Card>
  );
}
