import React, { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, PaletteMode } from '@mui/material';
import { ColorModeContextType, CustomThemeProviderProps } from '../../types/theme/types-theme';


const ColorModeContext = createContext<ColorModeContextType>({ toggleColorMode: () => { }, isDark: false });


export const CustomThemeProvider = (props: CustomThemeProviderProps) => {
    const { children } = props;
    const [mode, setMode] = useState<PaletteMode>('light');
    const lightOptions = {
        palette: {
            mode: 'light' as PaletteMode,
            primary: {
                main: '#00b5cd'
            },
            background: {
                default: '#c7d1e1',
                paper: 'rgb(236, 239, 245)'
            },
            secondary: {
                main: '#b3e028'
            }
        }
    };

    const darkOptions = {
        palette: {
            mode: 'dark' as PaletteMode,
            primary: {
                main: '#00b5cd'
            },
            background: {
                default: '#1e2838',
                paper: '#1e2838'
            },
            secondary: {
                main: '#b3e028'
            }
        }
    };
    const lightTheme = createTheme(lightOptions);
    const darkTheme = createTheme(darkOptions);
    const themes = { light: lightTheme, dark: darkTheme }
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                console.log('changing theme');
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            },
            isDark: mode === 'dark'
        }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={themes[mode]}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )

}
export const useColorMode = () => useContext(ColorModeContext);
export default ColorModeContext;