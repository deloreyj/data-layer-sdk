import MagentoDataLayerContextManager from "./MagentoDataLayerContextManager";
import MagentoDataLayerPublishManager from "./MagentoDataLayerPublishManager";
import MagentoDataLayerSubscribeManager from "./MagentoDataLayerSubscribeManager";

export class MagentoDataLayer {
  constructor() {
    // ensure event array is available
    window.adobeDataLayer = window.adobeDataLayer || [];
  }

  /**
   * Methods for interacting with context data
   */
  public contexts = new MagentoDataLayerContextManager(this);

  /**
   * Methods for publishing events
   */
  public publish = new MagentoDataLayerPublishManager(this);

  /**
   * Methods for subscribing to events
   */
  subscribe = new MagentoDataLayerSubscribeManager(this);
}

export default new MagentoDataLayer();
