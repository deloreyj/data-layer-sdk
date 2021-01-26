/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import MagentoDataLayerContextManager from "./MagentoDataLayerContextManager";
import MagentoDataLayerPublishManager from "./MagentoDataLayerPublishManager";
import MagentoDataLayerSubscribeManager from "./MagentoDataLayerSubscribeManager";
import MagentoDataLayerUnsubscribeManager from "./MagentoDataLayerUnsubscribeManager";

export class MagentoDataLayer {
  _handlerMapper = new WeakMap();
  constructor() {
    // ensure event array is available
    window.adobeDataLayer = window.adobeDataLayer || [];
  }

  /**
   * Methods for interacting with context data
   */
  public context = new MagentoDataLayerContextManager(this);

  /**
   * Methods for publishing events
   */
  public publish = new MagentoDataLayerPublishManager(this);

  /**
   * Methods for subscribing to events
   */
  public subscribe = new MagentoDataLayerSubscribeManager(this);

  /**
   * Methods for unsubscribing from events
   */
  public unsubscribe = new MagentoDataLayerUnsubscribeManager(this);
}

export default new MagentoDataLayer();
