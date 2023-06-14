import { Box,MenuItem,TextField } from "@mui/material"


export const MuiSelect = () => {
  return (
    <Box width="200px">
        <TextField label="Selecciona tu país" select>
            <MenuItem value="mexico">México</MenuItem>
            <MenuItem value="usa">USA</MenuItem>
            <MenuItem value="australia">Australia</MenuItem>
        </TextField>
    </Box>
  )
}
