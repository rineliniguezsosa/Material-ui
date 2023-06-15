import { Box,Checkbox,FormControlLabel,FormGroup,FormControl,FormLabel } from '@mui/material'
import { useState,ChangeEvent } from 'react';

export const MuiCheckbox = () => {
    const [conditions, setConditions] = useState(false)
    console.log(conditions)

    const [habilidades, setHabilidades] = useState<string[]>([])

    const handlechange = (event:ChangeEvent<HTMLInputElement>) =>{
        setConditions(event.target.checked)
    }
  return (
    <Box>
        <Box>
            <FormControlLabel control={<Checkbox checked={conditions} onChange={handlechange}/>} label="Acepta las condicones y terminos de privacidad" />
        </Box>

        <Box>
            <FormControl>
                <FormLabel>Habilidades</FormLabel>
                <FormGroup>
                    <FormControlLabel value="HTML" label="HTML" control={<Checkbox value="HTML"/>}/>
                    <FormControlLabel value="Typescript" label="Typescript" control={<Checkbox onChange={handleskillchange} value="Typescript"/>}/>
                    <FormControlLabel value="Javascript" label="Javascript" control={<Checkbox onChange={handleskillchange} value="Javascript"/>}/>
                    <FormControlLabel value="React" label="React" control={<Checkbox onChange={handleskillchange} value="React"/>}/>
                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}
