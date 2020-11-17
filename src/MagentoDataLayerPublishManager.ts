import { MagentoDataLayer } from ".";
import { ADD_TO_CART } from "./eventNames";
import { MagentoDataLayerBase } from "./MagentoDataLayerBase";

export default class MagentoDataLayerPublishManager extends MagentoDataLayerBase {
  constructor(mdl: MagentoDataLayer) {
    super();
    this.mdl = mdl;
  }

  /**
   *  Publish Add to Cart event
   */
  addToCart(): void {
    this.pushEvent(ADD_TO_CART);
  }
}
