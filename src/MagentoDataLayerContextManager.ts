import { MagentoDataLayer } from '.';
import {
    MAGENTO_EXTENSION_CONTEXT,
    PAGE_OFFSET_CONTEXT,
    PRODUCT_CONTEXT,
    SHOPPER_CONTEXT,
    SHOPPING_CART_CONTEXT,
    STOREFRONT_INSTANCE_CONTEXT,
    CUSTOM_URL_CONTEXT,
    REFERRER_URL_CONTEXT
} from './types/contexts';
import { MagentoDataLayerBase } from './MagentoDataLayerBase';
import { MagentoExtension } from './types/schemas/magentoExtension';
import { PageOffset } from './types/schemas/pageOffset';
import { Product } from './types/schemas/product';
import { Shopper } from './types/schemas/shopper';
import { StorefrontInstance } from './types/schemas/storefrontInstance';
import { ShoppingCart } from './types/schemas/shoppingCart';
import { CustomUrl } from './types/schemas/customUrl';
import { ReferrerUrl } from './types/schemas/referrerUrl';

export default class MagentoDataLayerContextManager extends MagentoDataLayerBase {
    constructor(mdl: MagentoDataLayer) {
        super();
        this.mdl = mdl;
    }

    /**
     * Get url context
     */
    getCustomUrl(): CustomUrl {
        return this.getContext<CustomUrl>(CUSTOM_URL_CONTEXT);
    }

    /**
     * Set url context
     */
    setCustomUrl(context: CustomUrl): void {
        this.setContext<CustomUrl>(CUSTOM_URL_CONTEXT, context);
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
     * Get referrer url context
     */
    getReferrerUrl(): ReferrerUrl {
        return this.getContext<ReferrerUrl>(REFERRER_URL_CONTEXT);
    }

    /**
     * Set referrer url context
     */
    setReferrerUrl(context: ReferrerUrl): void {
        this.setContext<ReferrerUrl>(REFERRER_URL_CONTEXT, context);
    }

    /**
     * Get shopping cart context
     */
    getShoppingCart(): ShoppingCart {
        return this.getContext<ShoppingCart>(SHOPPING_CART_CONTEXT);
    }

    /**
     * Set shopping cart context
     */
    setShoppingCart(context: ShoppingCart): void {
        this.setContext<ShoppingCart>(SHOPPING_CART_CONTEXT, context);
    }

    /**
     * Get storefront instance context
     */
    getStorefrontInstance(): StorefrontInstance {
        return this.getContext<StorefrontInstance>(STOREFRONT_INSTANCE_CONTEXT);
    }

    /**
     * Set storefront instance context
     * @param context
     */
    setStorefrontInstance(context: StorefrontInstance): void {
        this.setContext<StorefrontInstance>(
            STOREFRONT_INSTANCE_CONTEXT,
            context
        );
    }
}
