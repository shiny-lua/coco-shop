import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sx: true
    sm: true
    md: true
    lg: true
    xl: true
    xl2: true
  }

  interface CommonColors {
    mainBg: string
    heroBg: string
    iconBg: string
    iconBorder: string
    menuBg: string
    menuBorder: string
    menuLinkBg: string
    menuLinkBorder: string

    buttonBg: string
    serviceBorder: string
    memberBg: string
    memberBorder: string
    memberColor: string
    memberColor1: string

    preSaleBorder: string

    typograph1: string
    typograph2: string
    typograph3: string
    typograph4: string
    typograph5: string

    questionBorder: string

    footerLinkBg: string
    footerLineBg: string
    footerTypograph: string
  }

  // interface Palette {
  //   mainBg: PaletteColor;
  // }

  // interface PaletteOptions {
  //   mainBg: PaletteColorOptions;
  // }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    // mainBg: true;
  }
}

const MuiThemeProvider = ({ children }: any) => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sx: 450,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1320,
        xl2: 1536,
      }
    },
    palette: {
      mode: "dark",
      common: {
        black: '#000',
        white: '#fff',

        mainBg: '#ffffff',
        heroBg: '#020210',
        iconBg: '#FAFAFA',
        iconBorder: '#e9ebee80',
        menuBorder: '#FFFFFF4D',
        menuLinkBorder: '#FFFFFF66',
        menuBg: 'linear-gradient(0deg, #ffffffd9, #ffffffd9),linear-gradient(0deg, #ffffff4d, #ffffff4d)',
        menuLinkBg: 'linear-gradient(0deg, #ffffff66, #ffffff66),linear-gradient(0deg, #ffffff29), rgba(255, 255, 2#ffffff29)',

        memberColor: '#091E42',
        memberColor1: '#7A8699',
        serviceBorder: '#E9EBEE',
        memberBorder: '#FFFFFF99',
        buttonBg: 'linear-gradient(276.83deg, #20E3B7 10.2%, #22A6EC 90.93%)',
        memberBg: 'linear-gradient(0deg, #ffffffd9, #ffffffd9), linear-gradient(0deg, #ffffff99, #ffffff99)',

        preSaleBorder: 'linear-gradient(to right, #20E3B7, #22A6EC)',

        questionBorder: '#E9EBEE',

        typograph1: '#23262F',
        typograph2: '#15294B',
        typograph3: '#15294B',
        typograph4: '#091E42',
        typograph5: '#7A8699',

        footerLinkBg: '#FFFFFF14',
        footerLineBg: '#FFFFFF1A',
        footerTypograph: '#FFFFFF80'
      },

      // mainBg: { main: '#141416', light: '#24262f', contrastText: "#fff" },
      // primary: { main: '#fff', light: '#f55b00', dark: '#1e0500', contrastText: 'rgba(0,0,0,0.87)' },
    },
    typography: {
      allVariants: { color: "#272727" },
      htmlFontSize: 16,
      fontSize: 16,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 800,

      fontFamily: "Manrope"
    },
  })

  theme.typography.h1 = {
    ...theme.typography.h1,

    fontSize: 65,
    fontWeight: 500,

    [theme.breakpoints.down('xl')]: {
      fontSize: 60,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 55,
    },
  }

  theme.typography.h2 = {
    ...theme.typography.h2,

    fontSize: 48,
    fontWeight: 800,
    letterSpacing: '0em',
    lineHeight: '62px',
    textTransform: 'capitalize',

    [theme.breakpoints.down('xl')]: {
      fontSize: 40,
      lineHeight: '50px',
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 30,
      lineHeight: '39px',
    },
  }

  theme.typography.h3 = {
    ...theme.typography.h3,

    fontSize: 22,
    fontWeight: 500,

    [theme.breakpoints.down('xl')]: {
      fontSize: 20,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 18,
    },
  }

  theme.typography.h4 = {
    ...theme.typography.h4,

    fontSize: 18,
    fontWeight: 500,

    [theme.breakpoints.down('xl')]: {
      fontSize: 17,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
  }

  theme.typography.h5 = {
    ...theme.typography.h5,

    fontSize: 15,
    fontWeight: 500,

    [theme.breakpoints.down('xl')]: {
      fontSize: 15,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
  }

  theme.typography.h6 = {
    ...theme.typography.h6,

    fontSize: 15,
    fontWeight: 500,

    [theme.breakpoints.down('xl')]: {
      fontSize: 14,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 12,
    },
  }

  theme.typography.body1 = {
    ...theme.typography.body1,

    fontSize: 32,
    fontWeight: 800,
    lineHeight: '32px',

    [theme.breakpoints.down('xl')]: {
      fontSize: 25,
      lineHeight: '25px',
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 21,
      lineHeight: '21px',
    },
  }

  theme.typography.body2 = {
    ...theme.typography.body2,

    fontSize: 16
  }

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export { MuiThemeProvider };