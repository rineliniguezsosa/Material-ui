import { Stack,Button,IconButton,ButtonGroup,ToggleButtonGroup,ToggleButton } from '@mui/material'
import SendIcon  from '@mui/icons-material/Send'

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">primary</Button>
        <Button variant="contained" color="secondary">secondary</Button>
        <Button variant="contained" color="error">error</Button>
        <Button variant="contained" color="warning">warning</Button>
        <Button variant="contained" color="info">info</Button>
        <Button variant="contained" color="success">success</Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size='small'>small</Button>
        <Button variant="contained" size='medium'>medium</Button>
        <Button variant="contained" size='large'>large</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />}>Send</Button>

        <IconButton aria-label="Send" size="small" color="success">
          <SendIcon/>
        </IconButton>
      </Stack>

      <Stack direction="row">
        <ButtonGroup variant="outlined" color="warning" size="medium" orientation="vertical" aria-label="my buuton group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">

      </Stack>
    </Stack>
  )
}