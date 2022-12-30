export function formatUserCouponCode(code: string) {
    return code.includes('KLUBBSUSER_') ? 'KLUBBS' : code;
  }