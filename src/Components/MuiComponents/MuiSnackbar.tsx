import { Snackbar,Button } from '@mui/material'
import { useState,SyntheticEvent } from 'react';

export const MuiSnackbar = () => {
    const [open, setOpen] = useState(false)

    const handleclose = (event: SyntheticEvent | Event, reason?: string) =>{
        if(reason === 'clickaway'){
            return
        }
    }
  return (
    <>
        <Button>Submit</Button>
        <Snackbar
            message="Rinel say Hellow"
            open={open}
            autoHideDuration={2000}
            onClose={handleclose}
        />
    </>
  )
}
