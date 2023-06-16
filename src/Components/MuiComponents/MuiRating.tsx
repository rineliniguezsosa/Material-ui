import { Stack,Rating } from '@mui/material'
import { useState,ChangeEvent } from 'react';

export const MuiRating = () => {
    const [value, setValue] = useState<number | null>(null)

    console.log(value)
    
    const handlechange = (event:ChangeEvent<{}>,newvalue:number | null)=>{
        setValue(newvalue)
    }
  return (
    <Stack>
        <Rating value={value} onChange={handlechange}/>
    </Stack>
  )
}
