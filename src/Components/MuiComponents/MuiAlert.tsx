import { Stack,Alert,AlertTitle } from '@mui/material'

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
        <Alert variant="standard" severity='success'>Alert</Alert>

        <Alert variant="outlined" severity='success'>Alert</Alert>

        <Alert variant="filled" severity='success'>Alert</Alert>

        <Alert variant="filled" severity="error">
          This is the error
        </Alert>
    </Stack>
  )
}
