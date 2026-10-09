export const PAYMENT_WAIT_MS = 12 * 60 * 60 * 1000;

export function paymentReviewState(payment, now = Date.now()) {
  const createdAt = Number(payment.createdAt || 0);
  const eligibleAt = createdAt > 0 ? createdAt + PAYMENT_WAIT_MS : 0;
  return {eligibleAt, canApprove: payment.status === 'Pending' && !payment.provider &&
    eligibleAt > 0 && now >= eligibleAt};
}

export const pendingManualPayments = payments => payments.filter(payment =>
  payment.status === 'Pending' && !payment.provider);

export function newPendingPayments(previous, current) {
  const known = new Set(previous.map(payment => payment.id));
  return pendingManualPayments(current).filter(payment => !known.has(payment.id));
}
