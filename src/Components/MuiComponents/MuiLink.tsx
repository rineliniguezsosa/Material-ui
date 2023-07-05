import { Stack,Link,Typography } from '@mui/material'

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
        <Link href="#" variant="body2" underline='none'>Home</Link>
    </Stack>
  )
}
