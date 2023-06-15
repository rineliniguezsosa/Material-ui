import { Box,Checkbox,FormControlLabel } from '@mui/material'
import { useState,ChangeEvent } from 'react';

export const MuiCheckbox = () => {
    const [conditions, setConditions] = useState(false)

    const handlechange = (event:ChangeEvent<HTMLInputElement>) =>{

    }
  return (
    <Box>
        <Box>
            <FormControlLabel control={<Checkbox checked={conditions} onChange={handlechange}/>} label="Acepta las condicones y terminos de privacidad" />
        </Box>
    </Box>
  )
}
