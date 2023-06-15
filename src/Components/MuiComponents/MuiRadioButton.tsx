import { Box,FormControl,FormLabel,Radio,RadioGroup,FormControlLabel } from "@mui/material"
import { useState,ChangeEvent } from 'react';


export const MuiRadioButton = () => {
  const [value, setValue] = useState('')
  console.log(value)
  const handlechange = (event:ChangeEvent<HTMLInputElement>) =>{
    setValue(event.target.value)
  }
  return (
    <Box>
      <FormControl>
          <FormLabel id="job-experience-group-label">Años de experiencia</FormLabel>
          <RadioGroup value={value} onChange={handlechange} name="job-experience-group" aria-labelledby="job-experience-group-label">
            <FormControlLabel control={<Radio/>} label="0-2" value="0-2" />
            <FormControlLabel control={<Radio/>} label="3-5" value="3-5"/>
          </RadioGroup>
      </FormControl>
    </Box>
  )
}
