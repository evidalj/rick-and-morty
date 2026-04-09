import { ReactNode } from "react";
export interface ColorModeContextType {
    toggleColorMode: () => void;
    isDark: boolean;
}

export interface CustomThemeProviderProps {
    children: ReactNode;
}

