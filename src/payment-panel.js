const escape = value => String(value ?? '').replace(/[&<>"']/g, c =>
  ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));

export function paymentPanel({enabled, automatic, signedIn, nativeAvailable, busy, price,
  qrData, showName, displayName}) {
  if (!enabled) return '';
  const label = escape(price ?? 99);
  if (automatic) return `<div class="glass pad"><h3>QR Ph · ₱${label} / 30 days</h3>
    <p>Pay the exact amount using the QR Ph code on PayMongo checkout. After verified payment, 30 days of full access are added automatically.</p>
    ${!nativeAvailable ? '<p class="notice">Automatic payments require signing in through the Android app. Website preview accounts cannot make account payments.</p>' : ''}
    <button type="button" class="btn wide" data-action="start-qrph" ${signedIn && !busy ? '' : 'disabled'}>${busy ? 'Opening checkout…' : 'Pay with QR Ph'}</button>
    <button type="button" class="btn secondary wide" data-action="refresh-payment" ${signedIn ? '' : 'disabled'}>Refresh payment status</button>
    <p class="footnote">Returning from checkout does not confirm payment. Access changes only after the payment provider confirms it. Bank or e-wallet fees may apply.</p></div>`;
  return `<div class="glass pad" style="text-align:center"><h3>GCash · ₱${label} / 30 days</h3>
    ${showName && displayName ? `<p>${escape(displayName)}</p>` : ''}
    <img src="${escape(qrData)}" alt="GCash QR" style="width:min(100%,220px);border-radius:15px">
    <p class="notice">Allow at least 12 hours after submitting your reference for owner confirmation. Once your payment is verified and approved, you receive 30 days of full access. The free trial lasts 3 days and does not renew or charge you automatically.</p>
    <form id="payment-form"><label class="field">Reference number<input name="reference" required maxlength="80"></label>
    <button class="btn wide" ${signedIn ? '' : 'disabled'}>Submit payment for approval</button></form></div>`;
}
