import React from 'react';

export function SectionHeading({ eyebrow, title, description, onDark = false, size = 'lg', align = 'left', style }) {
  const fs = { sm: 28, md: 36, lg: 48, xl: 64 }[size] || 48;
  const lines = String(title || '').split('\n');
  return (
    <div style={{ textAlign: align, display: 'flex', flexDirection: 'column', gap: 16, alignItems: align === 'center' ? 'center' : 'flex-start', ...style }}>
      {eyebrow && <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: onDark ? 'var(--gold-500)' : 'var(--gold-700)' }}>{eyebrow}</div>}
      <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: fs, lineHeight: 1.05, letterSpacing: '0.01em', textTransform: 'uppercase', color: onDark ? 'var(--gold-700)' : 'var(--violet-700)', textWrap: 'balance' }}>
        {lines.map((l, i) => <React.Fragment key={i}>{i > 0 && <br />}{l}</React.Fragment>)}
      </h2>
      {description && <p style={{ margin: 0, maxWidth: '58ch', fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: onDark ? 'var(--white)' : 'var(--ink)' }}>{description}</p>}
    </div>
  );
}
