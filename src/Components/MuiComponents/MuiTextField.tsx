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

        </Stack>
    </Stack>
  )
}
