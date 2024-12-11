import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";
import React from "react";

const MyCards = ({ info, children }) => {
  return (
    <Grid2 size={{ xs: 12, md: 4 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{
              height: 233,
              width: { sx: 250, md: 320 },
            }}
            src={info.image}
            alt
          />
          <CardContent sx={{ padding: 4 }}>
            <Typography gutterBottom variant="h5" component="div">
              {info.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {info.caption}
            </Typography>
          </CardContent>
        </CardActionArea>
        {children}
      </Card>
    </Grid2>
  );
};

export default MyCards;
