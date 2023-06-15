import { Box,Checkbox,FormControlLabel,FormGroup } from '@mui/material'
import { useState,ChangeEvent } from 'react';

export const MuiCheckbox = () => {
    const [conditions, setConditions] = useState(false)
    console.log(conditions)
    const handlechange = (event:ChangeEvent<HTMLInputElement>) =>{
        setConditions(event.target.checked)
    }
  return (
    <Box>
        <Box>
            <FormControlLabel control={<Checkbox checked={conditions} onChange={handlechange}/>} label="Acepta las condicones y terminos de privacidad" />
        </Box>
    </Box>
  )
}
