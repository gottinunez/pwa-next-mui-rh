import { Box, Grid, InputLabel, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Plan } from "../types/Plan";
import CardPlanSection from "./CardPlanSection";
import SearchIcon from '@mui/icons-material/Search';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';


const PlansSection = () => {
  return (
    <Stack spacing={2} direction={"column"} alignItems={"center"} width={"100%"} borderRadius={5}>
      <Stack spacing={2} sx={{width:350,}}>
      <OutlinedInput id="SearchIcon" startAdornment={<SearchIcon position="start"></SearchIcon>}
        endAdornment={<TuneIcon position="end"></TuneIcon>}>
      </OutlinedInput>
      <OutlinedInput id="SearchIcon" startAdornment={<PersonAddAlt1Icon position="start"></PersonAddAlt1Icon>}
        endAdornment={<ExpandMoreIcon position="end"></ExpandMoreIcon>}></OutlinedInput>
      <OutlinedInput id="SearchIcon" startAdornment={<CalendarMonthIcon position="start"></CalendarMonthIcon>}></OutlinedInput>
    </Stack>
      </Stack >
  );
};

export default PlansSection;
