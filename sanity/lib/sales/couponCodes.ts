export const COUPON_CODES = {
    BOXING24: "BOXING24",
    BFRIDAY: "BFRIDAY",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;