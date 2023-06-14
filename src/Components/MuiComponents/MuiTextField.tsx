import { Stack,TextField } from "@mui/material"


export const MuiTextField = () => {
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
            <TextField label="Form input" required/>
            <TextField
             label="password"
             type="password"
             helperText="No compartas tu password"
             disabled
            />
        </Stack>
    </Stack>
  )
}
