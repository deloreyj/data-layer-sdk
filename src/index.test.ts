import mdl, { MagentoDataLayer } from "./index";
import {
  generateMagentoExtensionContext,
  generatePageOffsetsContext,
  generateProductContext,
  generateShopperContext,
} from "./mocks";
import { ADD_TO_CART } from "./eventNames";

beforeAll(() => {
  // Forces magento data layer code to be bundled so that
  // 'data layer should exist' test passes
  mdl;
});

beforeEach(async () => {
  jest.resetModules();
  window.adobeDataLayer = [];
  require("@adobe/adobe-client-data-layer");
});

test("data layer should exist", () => {
  expect(window.adobeDataLayer).toBeDefined();
});

test("shopper context", () => {
  const context = generateShopperContext();
  expect(mdl.context.getShopper()).toBeUndefined();
  mdl.context.setShopper(context);
  expect(mdl.context.getShopper()).toEqual(context);
});

test("magento extension context", () => {
  const context = generateMagentoExtensionContext();
  expect(mdl.context.getMagentoExtension()).toBeUndefined();
  mdl.context.setMagentoExtension(context);
  expect(mdl.context.getMagentoExtension()).toEqual(context);
});

test("page offset context", () => {
  const context = generatePageOffsetsContext();
  expect(mdl.context.getPageOffset()).toBeUndefined();
  mdl.context.setPageOffset(context);
  expect(mdl.context.getPageOffset()).toEqual(context);
});

test("product context", () => {
  const context = generateProductContext();
  expect(mdl.context.getProduct()).toBeUndefined();
  mdl.context.setProduct(context);
  expect(mdl.context.getProduct()).toEqual(context);
});

test("subscribe to add to cart and publish event", async () => {
  const eventHandler = jest.fn((eventObj, mdl) => {
    expect(eventObj.event).toEqual(ADD_TO_CART);
    expect(mdl).toBeInstanceOf(MagentoDataLayer);
  });

  mdl.subscribe.addToCart(eventHandler);
  expect(eventHandler).not.toHaveBeenCalled();
  mdl.publish.addToCart();
  expect(eventHandler).toHaveBeenCalled();
});

test("remove event listener works", async () => {
  const eventHandler = jest.fn();
  mdl.subscribe.addToCart(eventHandler);
  expect(eventHandler).not.toHaveBeenCalled();
  mdl.publish.addToCart();
  expect(eventHandler).toHaveBeenCalledTimes(1);
  mdl.unsubscribe.addToCart(eventHandler);
  mdl.publish.addToCart();
  expect(eventHandler).toHaveBeenCalledTimes(1);
});
