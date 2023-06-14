import { Stack,TextField,InputAdornment } from "@mui/material"
import { useState } from "react"

export const MuiTextField = () => {
    const [value, setValue] = useState('')  
  return (
    <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
            <TextField label="Name" variant="standard"/>
            <TextField label="Name" variant="outlined"/>
            <TextField label="Name" variant="filled"/>
        </Stack>

        <Stack direction="row" spacing={2}>
            <TextField label="Secondary Name" color="secondary" size="small"/>
        </Stack>

        <Stack direction="row" spacing={2}>
            <TextField 
                label="Form input" 
                value={value} 
                error={!value} 
                helperText={!value ? 'Required':'No compartas tu password'} 
                onChange={(event)=> setValue(event.target.value)} 
                required
            />
            <TextField
             label="password"
             type="password"
             helperText="No compartas tu password"
             disabled
            />
            <TextField label="Read only" InputProps={{readOnly:true}}/>
        </Stack>

        <Stack direction="row" spacing={2}>
            <TextField 
             label="Cantidad"
             InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
             }}
            />
        </Stack>
    </Stack>
  )
}
