import { Box,MenuItem,TextField } from "@mui/material"
import { useState,ChangeEvent } from 'react';


export const MuiSelect = () => {
    const [ciudad, setCiudad] = useState('')

    const handlechange = () =>{
        
    }
  return (
    <Box width="200px">
        <TextField label="Selecciona tu país" value={ciudad} onChange={handlechange} select>
            <MenuItem value="mexico">México</MenuItem>
            <MenuItem value="usa">USA</MenuItem>
            <MenuItem value="australia">Australia</MenuItem>
        </TextField>
    </Box>
  )
}
