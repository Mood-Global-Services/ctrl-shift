// src/theme/brandColors.ts
export type BrandColor = { main: string };

export type BrandPalette = {
  napulETHYellow1: BrandColor;
  napulETHYellow2: BrandColor;
  napulETHRed: BrandColor;
};

export type BrandPaletteOptions = Partial<BrandPalette>;

export const brandColors: BrandPalette = {
  napulETHYellow1: { main: "#FCD221" },
  napulETHYellow2: { main: "#E39A01" },
  napulETHRed: { main: "#952527" },
};
