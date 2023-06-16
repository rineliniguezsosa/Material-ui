import { Box,FormControlLabel,Switch } from "@mui/material"
import { useState,ChangeEvent } from 'react';


export const MuiSwitch = () => {
    const [checked, setChecked] = useState(false)

    const handlechange = ()=>{
        
    }
  return (
    <Box>
        <FormControlLabel label="Dark mode" control={<Switch checked={checked} onChange={handlechange}/>}/>
    </Box>
  )
}
