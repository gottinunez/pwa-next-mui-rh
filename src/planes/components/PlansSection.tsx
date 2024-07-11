import { Box, Button, Grid, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Plan } from "../types/Plan";
import CardPlanSection from "./CardPlanSection";
import SearchIcon from '@mui/icons-material/Search';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import { Container, CardActionArea, CardActions, CardContent, CardMedia, Card } from "@mui/material";


const PlansSection = () => {
  return (
    <><><Stack
      spacing={2}
      direction={"column"}
      alignItems={"center"}
      width={"100%"}
      borderRadius={"0px 0px 32px 32px"}
      p={4}
      bgcolor="#2e47ad">

      <Stack spacing={2} sx={{ width: 350, }}>
        <Box bgcolor={"white"} borderRadius={"8px"}>
          <OutlinedInput id="SearchIcon" startAdornment={<InputAdornment position="start"><SearchIcon /> </InputAdornment>}
            endAdornment={<InputAdornment position="start"><TuneIcon /> </InputAdornment>}
            fullWidth>
          </OutlinedInput>
        </Box>
        <Box bgcolor={"white"} borderRadius={"8px"}>
          <OutlinedInput id="SearchIcon" startAdornment={<InputAdornment position="start"><PersonAddAlt1Icon /> </InputAdornment>}
            endAdornment={<InputAdornment position="start"><ExpandMoreIcon /> </InputAdornment>}
            fullWidth>

          </OutlinedInput>

        </Box>
        <Box bgcolor={"white"} borderRadius={"8px"}>
          <OutlinedInput id="SearchIcon" startAdornment={<InputAdornment position="start"><CalendarMonthIcon /> </InputAdornment>}
            fullWidth></OutlinedInput>
        </Box>
      </Stack>
    </Stack>
      <Stack alignItems="center" width={100} sx={{ position: "relative", top: 0, left: "50%", transform: "translate(-50%, -50%)" }}>
        <Button variant="contained">
          Buscar
        </Button>
      </Stack>

      <Stack borderTop={"solid 2px grey"} margin={2}></Stack>
      <Typography paddingLeft={2}>Vistos Recientemente</Typography>
      </><Stack
        direction="row"
        justifyContent="center"
        margin-left="1000px"
        spacing={2}  
        sx={{ alignItems: "center" }}
      >

        <Card sx={{ maxWidth: 345, marginTop: 20, p:2}}>


          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://cdn.shopify.com/s/files/1/0669/3326/0575/files/COCONUT-FINAL_480x480.jpg?v=1676463115" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, marginTop: 20}}>


          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://colineal.com/cdn/shop/articles/estilos-decoracion-habitaciones-principales.jpg?v=1620156517&width=1000" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack></>
  );
};

export default PlansSection;
