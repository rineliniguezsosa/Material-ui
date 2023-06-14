import { Box,FormControl,FormLabel,Radio,RadioGroup,FormControlLabel } from "@mui/material"


export const MuiRadioButton = () => {
  return (
    <Box>
      <FormControl>
          <FormLabel id="job-experience-group-label">Años de experiencia</FormLabel>
          <RadioGroup name="job-experience-group" aria-labelledby="job-experience-group-label">

          </RadioGroup>
      </FormControl>
    </Box>
  )
}
