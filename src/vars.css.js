import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";

const root = createGlobalTheme("#root", {});

const colors = createThemeContract({
  primary: null,
  secondary: null,
});

export const light = createTheme(colors, {
  primary: "yellow",
  secondary: "orange",
});

export const dark = createTheme(colors, {
  primary: "brown",
  secondary: "green",
});

export const vars = { ...root, colors };
