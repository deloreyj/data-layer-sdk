/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { MagentoDataLayer } from ".";
import {
  MAGENTO_EXTENSION_CONTEXT,
  PAGE_OFFSET_CONTEXT,
  PRODUCT_CONTEXT,
  SHOPPER_CONTEXT,
} from "./types/contexts";
import { MagentoDataLayerBase } from "./MagentoDataLayerBase";
import { MagentoExtension } from "./types/schemas/magentoExtension";
import { PageOffset } from "./types/schemas/pageOffset";
import { Product } from "./types/schemas/product";
import { Shopper } from "./types/schemas/shopper";

export default class MagentoDataLayerContextManager extends MagentoDataLayerBase {
  constructor(mdl: MagentoDataLayer) {
    super();
    this.mdl = mdl;
  }

  /**
   * Get shopper context
   **/
  getShopper(): Shopper {
    return this.getContext<Shopper>(SHOPPER_CONTEXT);
  }

  /**
   * Set shopper context
   **/
  setShopper(context: Shopper): void {
    this.setContext<Shopper>(SHOPPER_CONTEXT, context);
  }

  /**
   * Get Magento extension context
   */
  getMagentoExtension(): MagentoExtension {
    return this.getContext<MagentoExtension>(MAGENTO_EXTENSION_CONTEXT);
  }

  /**
   * Set Magento extension context
   */
  setMagentoExtension(context: MagentoExtension): void {
    this.setContext<MagentoExtension>(MAGENTO_EXTENSION_CONTEXT, context);
  }

  /**
   * Get page offset context
   */
  getPageOffset(): PageOffset {
    return this.getContext<PageOffset>(PAGE_OFFSET_CONTEXT);
  }

  /**
   * Set page offset context
   */
  setPageOffset(context: PageOffset): void {
    this.setContext<PageOffset>(PAGE_OFFSET_CONTEXT, context);
  }

  /**
   * Get product context
   */
  getProduct(): Product {
    return this.getContext<Product>(PRODUCT_CONTEXT);
  }

  /**
   * Set product context
   */
  setProduct(context: Product): void {
    this.setContext<Product>(PRODUCT_CONTEXT, context);
  }

  /**
   * TODO:
   * magento-extension-context - done
   * page-offsets-context - done
   * product-context - done
   * referrer-url -
   * shopper-context - done
   * shopping-cart-context
   * storefront-instance-context
   */
}
