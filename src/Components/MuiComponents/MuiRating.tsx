import { Stack,Rating } from '@mui/material'
import { useState,ChangeEvent } from 'react';

export const MuiRating = () => {
    const [value, setValue] = useState<number | null>(null)

    const handlechange = ()=>{
        
    }
  return (
    <Stack>
        <Rating value={value} onChange={handlechange}/>
    </Stack>
  )
}
