import { Box,MenuItem,TextField } from "@mui/material"
import { useState,ChangeEvent } from 'react';


export const MuiSelect = () => {
    const [ciudad, setCiudad] = useState('')
    console.log(ciudad)
    const handlechange = (event: ChangeEvent<HTMLInputElement>) =>{
        setCiudad(event.target.value as string)
    }
  return (
    <Box width="200px">
        <TextField fullWidth label="Selecciona tu país" value={ciudad} onChange={handlechange} select>
            <MenuItem value="mexico">México</MenuItem>
            <MenuItem value="usa">USA</MenuItem>
            <MenuItem value="australia">Australia</MenuItem>
        </TextField>
    </Box>
  )
}
