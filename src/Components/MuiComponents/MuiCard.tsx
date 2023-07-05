import { Box,Typography,Card,CardContent,CardActions,Button } from "@mui/material"

export const MuiCard = () => {
  return (
    <Box width="300px">
        <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">React</Typography>

              <Typography variant="body2" color="InfoText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie egestas dui, in commodo nisi aliquet eget. Nunc sit amet lorem eget 
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
            </CardActions>
        </Card>
    </Box>
  )
}
