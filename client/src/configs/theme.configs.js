import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

export const themeModes = {
  dark: "dark",
  light: "light"
};

const themeConfigs = {
  custom: ({ mode }) => {
    const customPalette = mode === themeModes.dark ? {
      primary: {
        main: "#5a189a",
        contrastText: "#ffffff"
      },
      secondary: {
        main: "#49137d",
        contrastText: "#ffffff"
      },
      background: {
        default: "#000000",
        paper: "#000000"
      }
    } : {
      primary: {
        main: "#5a189a"
      },
      secondary: {
        main: "#49137d"
      },
      background: {
        default: colors.grey["100"],
      }
    };

    return createTheme({
      palette: {
        mode,
        ...customPalette
      },
      components: {
        MuiButton: {
          defaultProps: { disableElevation: true }
        }
      }
    });
  }
};

export default themeConfigs;