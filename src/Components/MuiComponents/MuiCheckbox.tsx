import { Box,Checkbox,FormControlLabel } from '@mui/material'
import { useState } from 'react';

export const MuiCheckbox = () => {
  return (
    <Box>
        <Box>
            <FormControlLabel control={<Checkbox/>} label="Acepta las condicones y terminos de privacidad">

            </FormControlLabel>
        </Box>
    </Box>
  )
}
