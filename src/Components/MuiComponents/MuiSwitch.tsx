import { Box,FormControlLabel,Switch } from "@mui/material"


export const MuiSwitch = () => {
  return (
    <Box>
        <FormControlLabel label="Dark mode" control={<Switch/>}/>
    </Box>
  )
}
