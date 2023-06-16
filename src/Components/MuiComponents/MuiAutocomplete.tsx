import { Stack,Autocomplete,TextField } from "@mui/material"


export const MuiAutocomplete = () => {
  return (
    <Stack spacing={2} width="250px">
        <Autocomplete options={skills} renderInput={(params)=><TextField {...params} label="Skills"/>}/>
    </Stack>
  )
}
