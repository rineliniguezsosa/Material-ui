import { Box,MenuItem,TextField } from "@mui/material"
import { useState } from 'react';


export const MuiSelect = () => {
    const [ciudad, setCiudad] = useState('')
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
