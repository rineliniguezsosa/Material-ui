import { Box,FormControlLabel,Switch } from "@mui/material"
import { useState,ChangeEvent } from 'react';


export const MuiSwitch = () => {
  return (
    <Box>
        <FormControlLabel label="Dark mode" control={<Switch/>}/>
    </Box>
  )
}
