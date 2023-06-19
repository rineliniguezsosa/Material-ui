import { Stack,Autocomplete,TextField } from "@mui/material"
import { useState } from 'react';

type skill = {
  id:number,
  label:string
}

export const MuiAutocomplete = () => {
    const skills:string[] = ['HTML','Javascript','Typescript','React Formik','React Router']

    const skilloption:skill = skills.map((skill,index)=> ({
      id:index+1,
      label:skill
    }))

    const [value, setValue] = useState<string | null>(null)

    console.log(value)
    const handlechange = (event:any,newvalue:string | null) =>{
      setValue(newvalue)
    }
  return (
    <Stack spacing={2} width="250px">
        <Autocomplete options={skills} value={value} onChange={handlechange} renderInput={(params)=><TextField {...params} label="Skills"/>}/>
    </Stack>
  )
}
