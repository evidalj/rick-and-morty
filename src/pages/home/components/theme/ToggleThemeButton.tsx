import React from "react";
import { ToggleButton } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useColorMode } from "../../../../context/theme/ColorModeContext";
const ToggleThemeButton = () => {
    const { toggleColorMode, isDark } = useColorMode();
    return (
        <ToggleButton value={isDark} onChange={toggleColorMode}>
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </ToggleButton>
    );
}

export default ToggleThemeButton;