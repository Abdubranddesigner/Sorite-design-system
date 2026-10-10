import React from 'react';

const TONES = {
  'violet-tint': { bg: 'var(--violet-100)', ink: 'var(--violet-700)', opacity: 0.14 },
  'gold-on-violet': { bg: 'var(--violet-700)', ink: 'var(--gold-700)', opacity: 0.22 },
  watermark: { bg: 'transparent', ink: null, opacity: 0.08 },
};

export function LotusPattern({ tone = 'violet-tint', size = 44, opacity, assetBase = 'assets/logo', radius = 0, style, children }) {
  const t = TONES[tone] || TONES['violet-tint'];
  const url = 'url(' + assetBase.replace(/\/$/, '') + '/soreti-lotus.svg)';
  const layer = t.ink
    ? { backgroundColor: t.ink, WebkitMaskImage: url, maskImage: url, WebkitMaskSize: size + 'px', maskSize: size + 'px', WebkitMaskRepeat: 'space', maskRepeat: 'space' }
    : { backgroundImage: url, backgroundSize: size + 'px', backgroundRepeat: 'space' };
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: t.bg, borderRadius: radius, ...style }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, opacity: opacity ?? t.opacity, pointerEvents: 'none', ...layer }} />
      <div style={{ position: 'relative' }}>{children}</div>
    </div>
  );
}
