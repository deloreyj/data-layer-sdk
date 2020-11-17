import { MagentoDataLayerBase } from "./MagentoDataLayerBase";

import { ADD_TO_CART } from "./eventNames";
import { MagentoDataLayerEventHandler } from "./types";
import { MagentoDataLayer } from ".";

export default class MagentoDataLayerSubscribeManager extends MagentoDataLayerBase {
  constructor(mdl: MagentoDataLayer) {
    super();
    this.mdl = mdl;
  }
  /**
   *  Subscribe to Add to Cart event
   */
  addToCart(handler: MagentoDataLayerEventHandler): void {
    this.addEventListener(ADD_TO_CART, handler);
  }
}
