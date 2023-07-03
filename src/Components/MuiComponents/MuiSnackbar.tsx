import { Snackbar,Button } from '@mui/material'
import { useState } from 'react';

export const MuiSnackbar = () => {
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
