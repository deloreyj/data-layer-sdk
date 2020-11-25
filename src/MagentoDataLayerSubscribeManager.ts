import { MagentoDataLayerBase } from "./MagentoDataLayerBase";

import {
  ADD_TO_CART,
  CUSTOM_URL,
  INITIATE_CHECKOUT,
  MagentoDataLayerEventHandler,
  PAGE_ACTIVITY_SUMMARY,
  PAGE_VIEW,
  PRODUCT_PAGE_VIEW,
  REFERRER_URL,
  REMOVE_FROM_CART,
  SIGN_IN,
  SIGN_OUT,
} from "./types/events";
import { MagentoDataLayer } from ".";

export default class MagentoDataLayerSubscribeManager extends MagentoDataLayerBase {
  constructor(mdl: MagentoDataLayer) {
    super();
    this.mdl = mdl;
  }

  /**
   * Subscribe to Add to Cart event
   */
  addToCart(handler: MagentoDataLayerEventHandler): void {
    this.addEventListener(ADD_TO_CART, handler);
  }

  /**
   * Subscribe to Custom Url event
   */
  customUrl(handler: MagentoDataLayerEventHandler): void {
    this.addEventListener(CUSTOM_URL, handler);
  }

  /**
   * Subscribe to Initiate Checkout event
   */
  initiateCheckout(handler: MagentoDataLayerEventHandler): void {
    this.addEventListener(INITIATE_CHECKOUT, handler);
  }

  /**
   * Subscribe to Page Activity Summary event
   */
  pageActivitySummary(handler: MagentoDataLayerEventHandler): void {
    this.addEventListener(PAGE_ACTIVITY_SUMMARY, handler);
  }

  /**
   * Subscribe to Page View event
   */
  pageView(handler: MagentoDataLayerEventHandler): void {
    this.addEventListener(PAGE_VIEW, handler);
  }

  /**
   * Subscribe to Product Page View event
   */
  productPageView(handler: MagentoDataLayerEventHandler): void {
    this.addEventListener(PRODUCT_PAGE_VIEW, handler);
  }

  /**
   * Subscribe to Referrer Url event
   */
  referrerUrl(handler: MagentoDataLayerEventHandler): void {
    this.addEventListener(REFERRER_URL, handler);
  }

  /**
   * Subscribe to Remove from Cart event
   */
  removeFromCart(handler: MagentoDataLayerEventHandler): void {
    this.addEventListener(REMOVE_FROM_CART, handler);
  }

  /**
   * Subscribe to Sign In event
   */
  signIn(handler: MagentoDataLayerEventHandler): void {
    this.addEventListener(SIGN_IN, handler);
  }

  /**
   * Subscribe to Sign Out event
   */
  signOut(handler: MagentoDataLayerEventHandler): void {
    this.addEventListener(SIGN_OUT, handler);
  }
}
