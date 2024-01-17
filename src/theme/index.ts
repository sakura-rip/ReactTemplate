import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export function createCustomTheme() {
  const theme = createTheme();
  return responsiveFontSizes(theme);
}
