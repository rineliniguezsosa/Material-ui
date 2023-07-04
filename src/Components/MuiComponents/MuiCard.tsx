import { Box,Typography,Card,CardContent } from "@mui/material"

export const MuiCard = () => {
  return (
    <Box width="300px">
        <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">React</Typography>
            </CardContent>
        </Card>
    </Box>
  )
}
