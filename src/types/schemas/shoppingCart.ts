export interface ShoppingCart {
  cartId?: number | null;
  giftMessageSelected?: boolean;
  giftWrappingSelected?: boolean;
  items?: Array<ShoppingCartItem>;
  itemsCount: number;
  possibleOnepageCheckout?: boolean;
  subtotalAmount?: number;
  subtotalExcludingTax?: number;
  subtotalIncludingTax?: number;
}

interface ShoppingCartItem {
  basePrice?: number;
  cartItemId: number;
  mainImageUrl?: string;
  offerPrice: number;
  productName: string;
  productSku: string;
  qty: number;
}
