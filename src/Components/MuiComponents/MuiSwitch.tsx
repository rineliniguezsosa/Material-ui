import { Box,FormControlLabel,Switch } from "@mui/material"
import { useState,ChangeEvent } from 'react';


export const MuiSwitch = () => {
    const [checked, setChecked] = useState(false)

    console.log(checked)

    const handlechange = (event:ChangeEvent<HTMLInputElement>)=>{
        setChecked(event.target.checked)
    }
  return (
    <Box>
        <FormControlLabel label="Dark mode" control={<Switch size="small" color="success" checked={checked} onChange={handlechange}/>}/>
    </Box>
  )
}
