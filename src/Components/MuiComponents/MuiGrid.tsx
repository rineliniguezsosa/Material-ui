import { Grid,Box } from "@mui/material"


export const MuiGrid = () => {
  return (
    <div>
        <Grid container>
            <Grid item xs={6}>
               <Box>item 1</Box> 
            </Grid>
            <Grid item xs={6}>
               <Box>item 2</Box> 
            </Grid>
            <Grid item xs={6}>
               <Box>item 3</Box> 
            </Grid>
            <Grid item xs={6}>
               <Box>item 4</Box> 
            </Grid>
        </Grid> 
    </div>
  )
}
