import { Grid,Box } from "@mui/material"


export const MuiGrid = () => {
  return (
    <div>
        <Grid container>
            <Grid item>
               <Box>item 1</Box> 
            </Grid>
            <Grid item>
               <Box>item 2</Box> 
            </Grid>
            <Grid item>
               <Box>item 3</Box> 
            </Grid>
        </Grid> 
    </div>
  )
}
