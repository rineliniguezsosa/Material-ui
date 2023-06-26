import { AppBar,Toolbar,Stack,Typography,IconButton,Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const MuiNavbar = () => {
  return (
    <AppBar position="static">
        <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                <AccountCircleIcon/>
            </IconButton>

            <Typography variant="h6" component="div" sx={{flexGrow:1}}>Rinel</Typography>

            <Stack direction="row" spacing={2}>
                <Button>Home</Button>
                <Button>Login</Button>
                <Button>Registrarse</Button>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}

