import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import ToggleThemeButton from "../theme/ToggleThemeButton";

const Bar = () => {
    return (
        <AppBar component='nav'>
            <Toolbar>
                <Typography
                    variant="h6"
                    component={'div'}
                    sx={{ flexGrow: 1 }}
                >
                    Rick and Morty
                </Typography>
                <ToggleThemeButton />
            </Toolbar>
        </AppBar>
    )
}

export default Bar;