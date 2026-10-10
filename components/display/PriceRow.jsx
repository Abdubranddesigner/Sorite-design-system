import React from 'react';

export function PriceRow({ name, description, meta, prices = [], badge, onDark = false, style }) {
  const fg = onDark ? 'var(--white)' : 'var(--ink)';
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '6px 24px', padding: '18px 0', borderBottom: '1px solid ' + (onDark ? 'rgba(183,143,46,.45)' : 'var(--gold-300)'), fontFamily: 'var(--font-body)', color: fg, ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500, lineHeight: 1.25, color: onDark ? 'var(--gold-500)' : 'var(--violet-700)' }}>{name}</span>
        {badge}
      </div>
      <div style={{ display: 'flex', gap: 18, justifyContent: 'flex-end', alignItems: 'baseline', flexWrap: 'wrap' }}>
        {prices.map((p, i) => (
          <span key={i} style={{ whiteSpace: 'nowrap', fontSize: 14 }}>
            {p.label && <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: onDark ? 'var(--violet-200)' : 'var(--ink-3)', marginRight: 8 }}>{p.label}</span>}
            <span style={{ fontWeight: 500 }}>{p.amount}</span>
          </span>
        ))}
      </div>
      {(meta || description) && (
        <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {meta && <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: onDark ? 'var(--gold-400)' : 'var(--gold-800)' }}>{meta}</span>}
          {description && <span style={{ fontSize: 14, lineHeight: 1.6, color: onDark ? 'var(--violet-200)' : 'var(--ink-2)', maxWidth: '68ch' }}>{description}</span>}
        </div>
      )}
    </div>
  );
}
