import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import UserName from "./UserName";
import UserAddress from "./UserAddress";
import UserImage from "./UserImage";

export default function GradientCover() {
  return (
    <Card sx={{ minHeight: "280px", width: 280 }}>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <UserImage></UserImage>
        <Typography level="h1" fontSize="lg" textColor="#fff" mb={1}>
          <UserName></UserName>
        </Typography>
        <Typography
          startDecorator={
            <a href="https://www.google.com/maps/dir//Gafsa+Gare/@34.4044968,8.7952098,17.86z/data=!4m17!1m7!3m6!1s0x12f897a377610eb1:0xd3feda8e28d91b04!2sGafsa+Gare!3b1!8m2!3d34.3935789!4d8.8004489!4m8!1m0!1m5!1m1!1s0x12f897a377610eb1:0xd3feda8e28d91b04!2m2!1d8.8004489!2d34.3935789!3e2">
              <LocationOnRoundedIcon />
            </a>
          }
          textColor="neutral.300"
        >
          <UserAddress></UserAddress>
        </Typography>
      </CardContent>
    </Card>
  );
}
