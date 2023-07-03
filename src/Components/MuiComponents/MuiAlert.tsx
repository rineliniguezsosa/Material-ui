import { Stack,Alert,AlertTitle } from '@mui/material'

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
        <Alert variant="standard" severity='success'>Alert</Alert>
    </Stack>
  )
}
