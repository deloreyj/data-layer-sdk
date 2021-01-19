export interface StorefrontInstance {
    environtmentId: string;
    instanceId?: string;
    environment: string;
    storeUrl: string;
    websiteId: number;
    websiteCode?: string;
    storeId: number;
    storeCode?: string;
    storeViewId: number;
    storeViewCode?: string;
    websiteName: string;
    storeName: string;
    storeViewName: string;
    baseCurrencyCode: string;
    storeViewCurrencyCode: string;
    catalogExtensionVersion?: string | null;
}
