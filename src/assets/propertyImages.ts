// propertyImages.ts – pronto para GitHub Pages
const BASE = "/imovel-mafra/";

// HERO
export const heroImage = `${BASE}hero/DJI_0695.jpg`;

// BEFORE / AFTER
export const beforeLiving = `${BASE}before/before-living.jpg`;
export const afterLiving = `${BASE}after/after-living.jpg`;
export const beforeKitchen = `${BASE}before/before-kitchen.jpg`;
export const afterKitchen = `${BASE}after/after-kitchen.jpg`;
export const beforePool = `${BASE}before/before-pool.jpg`;
export const afterPool = `${BASE}after/after-pool.jpg`;
export const beforeYard = `${BASE}before/before-yard.jpg`;
export const afterYard = `${BASE}after/after-yard.jpg`;
export const beforeGarage = `${BASE}before/before-garage.jpg`;
export const afterGarage = `${BASE}after/after-garage.jpg`;

// GALLERY – todos os arquivos
export const galleryImages = [
  `${BASE}gallery/DJI_0688.jpg`,
  `${BASE}gallery/DJI_0689.jpg`,
  `${BASE}gallery/DJI_0690.jpg`,
  `${BASE}gallery/DJI_0691.jpg`,
  `${BASE}gallery/DJI_0692.jpg`,
  `${BASE}gallery/DJI_0693.jpg`,
  `${BASE}gallery/DJI_0694.jpg`,
  `${BASE}gallery/DJI_0696.jpg`,
  `${BASE}gallery/DSC06927.jpg`,
  `${BASE}gallery/DSC06928.jpg`,
  `${BASE}gallery/DSC06929.jpg`,
  `${BASE}gallery/DSC06930.jpg`,
  `${BASE}gallery/DSC06931.jpg`,
  `${BASE}gallery/DSC06932.jpg`,
  `${BASE}gallery/DSC06933.jpg`,
  `${BASE}gallery/DSC06935Blend.jpg`,
  `${BASE}gallery/DSC06940Blend.jpg`,
  `${BASE}gallery/DSC06945Blend.jpg`,
  `${BASE}gallery/DSC06950Blend.jpg`,
  `${BASE}gallery/DSC06955Blend.jpg`,
  `${BASE}gallery/DSC06960Blend.jpg`,
  `${BASE}gallery/DSC06965Blend.jpg`,
  `${BASE}gallery/DSC06970Blend.jpg`,
  `${BASE}gallery/DSC06975Blend.jpg`,
  `${BASE}gallery/DSC06980Blend.jpg`,
  `${BASE}gallery/DSC06985Blend.jpg`,
  `${BASE}gallery/DSC06990Blend.jpg`,
  `${BASE}gallery/DSC06995Blend.jpg`,
  `${BASE}gallery/DSC07000Blend.jpg`,
  `${BASE}gallery/DSC07005Blend.jpg`,
  `${BASE}gallery/DSC07010Blend.jpg`,
  `${BASE}gallery/DSC07020Blend.jpg`,
  `${BASE}gallery/DSC07025Blend.jpg`,
  `${BASE}gallery/DSC07030Blend.jpg`,
  `${BASE}gallery/DSC07035Blend.jpg`,
  `${BASE}gallery/DSC07044Blend.jpg`,
  `${BASE}gallery/DSC07045Blend.jpg`,
  `${BASE}gallery/DSC07055Blend.jpg`,
  `${BASE}gallery/DSC07060Blend.jpg`,
  `${BASE}gallery/DSC07065Blend.jpg`,
  `${BASE}gallery/DSC07070Blend.jpg`,
  `${BASE}gallery/DSC07075Blend.jpg`,
  `${BASE}gallery/DSC07080Blend.jpg`,
  `${BASE}gallery/DSC07085Blend.jpg`,
  `${BASE}gallery/DSC07090Blend.jpg`,
  `${BASE}gallery/DSC07095Blend.jpg`,
  `${BASE}gallery/DSC07100Blend.jpg`,
  `${BASE}gallery/DSC07105Blend.jpg`,
  `${BASE}gallery/DSC07110Blend.jpg`,
  `${BASE}gallery/DSC07115.jpg`,
  `${BASE}gallery/DSC07116.jpg`,
];

// BEFORE / AFTER array
export const beforeAfterImages = [
  { label: "exterior", before: beforeYard, after: afterYard },
  { label: "garage", before: beforeGarage, after: afterGarage },
  { label: "pool", before: beforePool, after: afterPool },
];

// OBJETO FINAL
export const propertyImages = {
  hero: heroImage,
  gallery: galleryImages,
  beforeAfter: beforeAfterImages,
};
