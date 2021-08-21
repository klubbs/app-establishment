export interface ICoupon {
    description: string
    offPercentual: number
    validAt: Date
}

export interface ICouponRequest {
    description: string
    off_percentual: number
    valid_at: number
}
