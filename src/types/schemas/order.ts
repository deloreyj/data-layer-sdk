export interface Order {
  orderId: number;
  appliedCouponCode: string;
  email: string;
  paymentMethodName: string;
  paymentMethodCode: string;
  grandTotal: number;
  subtotalIncludingTax: number;
  subtotalExcludingTax: number;
  salesTax: number;
  otherTax: number;
}
