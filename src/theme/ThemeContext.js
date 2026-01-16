import { createContext } from "react";
import { useColorScheme } from "react-native";
import { DarkTheme, LightTheme } from "./colors";


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const scheme = useColorScheme(); 

  const theme = scheme === "dark" ? DarkTheme : LightTheme;

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};