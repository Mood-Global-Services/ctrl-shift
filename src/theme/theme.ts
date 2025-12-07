// src/theme/theme.ts
import {
    createTheme,
    responsiveFontSizes,
    type PaletteOptions,
  } from "@mui/material/styles";
  
  import type {
    BrandPalette,
    BrandPaletteOptions,
  } from "./brandColors"; // NOTE: relative import
  import { brandColors } from "./brandColors"; // NOTE: relative import
  
  // ---- MUI module augmentation for `brand` ----
  declare module "@mui/material/styles" {
    interface Palette {
      brand: BrandPalette;
    }
  
    interface PaletteOptions {
      brand?: BrandPaletteOptions;
    }
  }
  
  const palette: PaletteOptions = {
    mode: "dark",
    primary: {
      // Main CTA / highlight color
      main: brandColors.napulETHYellow1.main,
    },
    secondary: {
      // Core NapulETH red
      main: brandColors.napulETHRed.main,
    },
    background: {
      // Matches DarkPage gradient base (#170300 → #841403)
      default: "#170300",
      paper: "#1A0707",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.8)",
    },
    info: {
      // Mid red used in text gradients (#A42A2E)
      main: "#A42A2E",
    },
    error: {
      main: "#DC2626",
    },
    success: {
      main: "#389685",
    },
    // Brand palette extension
    brand: brandColors,
  };
  
  let theme = createTheme({
    palette,
    typography: {
        fontFamily:
          'var(--font-switzer), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      },
  });
  
  theme = responsiveFontSizes(theme);
  
  export default theme;
  