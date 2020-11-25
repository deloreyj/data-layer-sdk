export const SHOPPER_CONTEXT = "shopper-context";
export const MAGENTO_EXTENSION_CONTEXT = "magento-extension-context";
export const PAGE_OFFSET_CONTEXT = "page-offset-context";
export const PRODUCT_CONTEXT = "product-context";

export type ContextName =
  | typeof SHOPPER_CONTEXT
  | typeof MAGENTO_EXTENSION_CONTEXT
  | typeof PAGE_OFFSET_CONTEXT
  | typeof PRODUCT_CONTEXT;
