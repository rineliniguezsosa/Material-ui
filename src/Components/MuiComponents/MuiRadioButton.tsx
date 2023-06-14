import { Box,FormControl,FormLabel,Radio,RadioGroup,FormControlLabel } from "@mui/material"


export const MuiRadioButton = () => {
  return (
    <Box>
      <FormControl>
          <FormLabel id="job-experience-group-label">Años de experiencia</FormLabel>
          <RadioGroup name="job-experience-group" aria-labelledby="job-experience-group-label">
            <FormControlLabel control={<Radio/>} label="0-2" value="0-2" />
            <FormControlLabel control={<Radio/>} label="3-5" value="3-5"/>
          </RadioGroup>
      </FormControl>
    </Box>
  )
}
