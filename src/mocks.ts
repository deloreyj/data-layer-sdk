import { MagentoExtension } from "./types/schemas/magentoExtension";
import { PageOffset } from "./types/schemas/pageOffset";
import { Product } from "./types/schemas/product";
import { Shopper } from "./types/schemas/shopper";

export const generateShopperContext = (
  overrides?: Partial<Shopper>
): Shopper => ({ shopperId: "test", ...overrides });
export const generateMagentoExtensionContext = (
  overrides?: Partial<MagentoExtension>
): MagentoExtension => ({
  magentoExtensionVersion: "1.0.0",
  ...overrides,
});
export const generatePageOffsetsContext = (
  overrides?: Partial<PageOffset>
): PageOffset => ({
  eventType: "visibilityHidden",
  maxXOffset: 0,
  maxYOffset: 0,
  minXOffset: 0,
  minYOffset: 0,
  ping_interval: 5,
  pings: 20419,
  ...overrides,
});
export const generateProductContext = (
  overrides?: Partial<Product>
): Product => ({
  categories: ["14", "15", "21"],
  name: "Felicia Maxi Dress",
  productId: 1153,
  sku: "VD04",
  topLevelSku: "VD04",
  ...overrides,
});
