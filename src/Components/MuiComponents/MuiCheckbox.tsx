import { Box,Checkbox,FormControlLabel,FormGroup,FormControl,FormLabel } from '@mui/material'
import { useState,ChangeEvent } from 'react';

export const MuiCheckbox = () => {
    const [conditions, setConditions] = useState(false)
    console.log(conditions)

    const [habilidades, setHabilidades] = useState<string[]>([])
    console.log(habilidades)
    const handlechange = (event:ChangeEvent<HTMLInputElement>) =>{
        setConditions(event.target.checked)
    }

    const handleskillchange = (event:ChangeEvent<HTMLInputElement>) =>{
        setHabilidades([...habilidades,event.target.value])
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
                    <FormControlLabel value="HTML" label="HTML" control={<Checkbox checked={habilidades.includes('HTML')}/>}/>
                    <FormControlLabel value="Typescript" label="Typescript" control={<Checkbox checked={habilidades.includes('Typescript')} onChange={handleskillchange}/>}/>
                    <FormControlLabel value="Javascript" label="Javascript" control={<Checkbox checked={habilidades.includes('Javascript')} onChange={handleskillchange}/>}/>
                    <FormControlLabel value="React" label="React" control={<Checkbox checked={habilidades.includes('React')} onChange={handleskillchange}/>}/>
                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}
