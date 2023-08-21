import {Box, Typography, useTheme} from "@mui/material";
import {tokens} from "../theme.js";

function Header({title, subTitle}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box sx={{mb: '30px'}}>
            <Typography variant="h2" sx={{
                color: colors.grey[100],
                fontWeight: 'bold',
                mb: '5px'
            }}>{title}</Typography>
            <Typography variant="h5" sx={{color: colors.greenAccent[400]}}>{subTitle}</Typography>
        </Box>
    )
}

export default Header;
