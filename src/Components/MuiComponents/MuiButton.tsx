import { Stack,Button } from '@mui/material'

export const MuiButton = () => {
  return (
    <Stack direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  )
}
