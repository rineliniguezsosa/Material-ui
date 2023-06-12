import { Typography } from "@mui/material"

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant="h1">Rinel variant h1</Typography>
        <Typography variant="h2">Rinel variant h2</Typography>
        <Typography variant="h3">Rinel variant h3</Typography>
        <Typography variant="h4">Rinel variant h4</Typography>
        <Typography variant="h5" component="h1">Rinel variant h5</Typography>
        <Typography variant="h6">Rinel variant h6</Typography>

        <Typography variant="subtitle1"> variant Subtitle 1</Typography>
        <Typography variant="subtitle2"> variant Subtitle 2</Typography>

        <Typography variant="body1"></Typography>
        <Typography variant="body2"></Typography>
    </div>
  )
}

/*
props variant and component

variant: podemos cambiar la fuente y el tamaño mediante la prop variant
component: podemos cambiar la semantica del elementom mediante la prop component
 */
