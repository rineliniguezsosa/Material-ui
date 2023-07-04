import { Snackbar,Button,Alert,AlertProps } from '@mui/material'
import { useState,SyntheticEvent,forwardRef } from 'react';

export const MuiSnackbar = () => {
    const [open, setOpen] = useState(false)

    const handleclose = (event: SyntheticEvent | Event, reason?: string) =>{
        if(reason === 'clickaway'){
            return
        }
        setOpen(false)
    }

    const SnackbarAlert = forwardRef<HTMLDivElement,AlertProps>(
        function SnackbarAlert(props,ref){
            return <Alert variant="filled" elevation={6} ref={ref} {...props}/> 
        }
    )
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
