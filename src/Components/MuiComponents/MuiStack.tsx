import { Box,Stack,Divider } from "@mui/material"


export const MuiStack = () => {
  return (
    <Stack 
    sx={{border:'1px solid'}}
    direction="row"
    spacing={2}
    divider={<Divider flexItem orientation="vertical"/>}
    >
      <Box sx={{border:'1px solid',width:'100px',height:'100px'}}></Box>

      <Box sx={{border:'1px solid',width:'100px',height:'100px'}}></Box>
    </Stack>
  )
}
