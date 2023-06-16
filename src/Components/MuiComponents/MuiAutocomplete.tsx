import { Stack,Autocomplete,TextField } from "@mui/material"
import { useState } from 'react';


export const MuiAutocomplete = () => {
    const skills:string[] = ['HTML','Javascript','Typescript','React Formik','React Router']
  return (
    <Stack spacing={2} width="250px">
        <Autocomplete options={skills} renderInput={(params)=><TextField {...params} label="Skills"/>}/>
    </Stack>
  )
}
