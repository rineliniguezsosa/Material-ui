import { AppBar,Toolbar,Stack,Typography,IconButton,Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const MuiNavbar = () => {
  return (
    <AppBar position="static">
        <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                <AccountCircleIcon/>
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}

