

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const scheme = useColorScheme(); // detects "dark" or "light"

  const theme = scheme === "dark" ? DarkTheme : LightTheme;

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};