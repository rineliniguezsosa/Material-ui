import { Snackbar,Button } from '@mui/material'
import { useState,SyntheticEvent } from 'react';

export const MuiSnackbar = () => {
    const [open, setOpen] = useState(false)

    const handleclose = (event: SyntheticEvent | Event, reason?: string) =>{
        if(reason === 'clickaway'){
            return
        }
        setOpen(false)
    }
  return (
    <>
        <Button onClick={()=> setOpen(true)}>Submit</Button>
        <Snackbar
            message="Rinel say Hellow"
            open={open}
            autoHideDuration={2000}
            onClose={handleclose}
        />
    </>
  )
}
