import { Grid,Box } from "@mui/material"


export const MuiGrid = () => {
  return (
    <div>
        <Grid container rowSpacing={1} columnSpacing={2}>
            <Grid item xs={6}>
               <Box bgcolor="primary.light">item 1</Box> 
            </Grid>
            <Grid item xs={6}>
               <Box bgcolor="primary.light">item 2</Box> 
            </Grid>
            <Grid item xs={6}>
               <Box bgcolor="primary.light">item 3</Box> 
            </Grid>
            <Grid item xs={6}>
               <Box bgcolor="primary.light">item 4</Box> 
            </Grid>
        </Grid> 
    </div>
  )
}
