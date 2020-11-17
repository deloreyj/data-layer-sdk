import mdl, { MagentoDataLayer } from "./index";
import "@adobe/adobe-client-data-layer";
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

test("data layer should exist", () => {
  expect(window.adobeDataLayer).toBeDefined();
});

test("shopper context", () => {
  const context = generateShopperContext();
  expect(mdl.contexts.getShopper()).toBeUndefined();
  mdl.contexts.setShopper(context);
  expect(mdl.contexts.getShopper()).toEqual(context);
});

test("magento extension context", () => {
  const context = generateMagentoExtensionContext();
  expect(mdl.contexts.getMagentoExtension()).toBeUndefined();
  mdl.contexts.setMagentoExtension(context);
  expect(mdl.contexts.getMagentoExtension()).toEqual(context);
});

test("page offset context", () => {
  const context = generatePageOffsetsContext();
  expect(mdl.contexts.getPageOffset()).toBeUndefined();
  mdl.contexts.setPageOffset(context);
  expect(mdl.contexts.getPageOffset()).toEqual(context);
});

test("product context", () => {
  const context = generateProductContext();
  expect(mdl.contexts.getProduct()).toBeUndefined();
  mdl.contexts.setProduct(context);
  expect(mdl.contexts.getProduct()).toEqual(context);
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
