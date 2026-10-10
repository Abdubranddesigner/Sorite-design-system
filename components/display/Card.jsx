import React from 'react';

export function Card({ variant = 'hairline', media, eyebrow, title, children, footer, onClick, padding = 28, style }) {
  const [hover, setHover] = React.useState(false);
  const v = {
    hairline: { background: 'var(--white)', border: '1px solid var(--gold-700)', color: 'var(--ink)', title: 'var(--violet-700)' },
    plain: { background: 'var(--white)', border: '1px solid var(--violet-200)', color: 'var(--ink)', title: 'var(--violet-700)' },
    violet: { background: 'var(--violet-700)', border: '1px solid transparent', color: 'var(--white)', title: 'var(--gold-500)' },
    tint: { background: 'var(--violet-100)', border: '1px solid transparent', color: 'var(--ink)', title: 'var(--violet-700)' },
  }[variant] || {};
  return (
    <div onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ background: v.background, border: v.border, color: v.color, borderRadius: 'var(--radius-md)', overflow: 'hidden', display: 'flex', flexDirection: 'column',
        cursor: onClick ? 'pointer' : 'default', transform: onClick && hover ? 'translateY(-3px)' : 'none', boxShadow: onClick && hover ? 'var(--shadow-pop)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)', fontFamily: 'var(--font-body)', ...style }}>
      {media && <div style={{ aspectRatio: '4 / 3', overflow: 'hidden', background: 'var(--violet-100)' }}>{media}</div>}
      <div style={{ padding, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        {eyebrow && <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: variant === 'violet' ? 'var(--gold-500)' : 'var(--gold-700)' }}>{eyebrow}</div>}
        {title && <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 24, lineHeight: 1.2, color: v.title }}>{title}</div>}
        {children && <div style={{ fontSize: 15, lineHeight: 1.6 }}>{children}</div>}
        {footer && <div style={{ marginTop: 'auto', paddingTop: 12 }}>{footer}</div>}
      </div>
    </div>
  );
}
