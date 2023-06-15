import { Box,Checkbox,FormControlLabel } from '@mui/material'
import { useState } from 'react';

export const MuiCheckbox = () => {
    const [conditions, setConditions] = useState(false)
  return (
    <Box>
        <Box>
            <FormControlLabel control={<Checkbox checked={conditions}/>} label="Acepta las condicones y terminos de privacidad" />
        </Box>
    </Box>
  )
}
