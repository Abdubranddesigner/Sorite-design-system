import React from 'react';

const SIZES = {
  sm: { height: 36, padding: '0 18px', fontSize: 12 },
  md: { height: 44, padding: '0 26px', fontSize: 13 },
  lg: { height: 52, padding: '0 34px', fontSize: 14 },
};

function palette(variant, hover, press) {
  switch (variant) {
    case 'accent': return { background: press ? 'var(--gold-800)' : hover ? 'var(--gold-800)' : 'var(--gold-700)', color: 'var(--white)', border: '1px solid transparent' };
    case 'outline': return { background: hover ? 'var(--violet-100)' : 'transparent', color: 'var(--violet-700)', border: '1px solid var(--gold-700)' };
    case 'inverse': return { background: hover ? 'var(--gold-200)' : 'var(--white)', color: 'var(--violet-700)', border: '1px solid transparent' };
    case 'outline-inverse': return { background: hover ? 'rgba(255,255,255,.08)' : 'transparent', color: 'var(--white)', border: '1px solid var(--gold-700)' };
    case 'ghost': return { background: 'transparent', color: hover ? 'var(--gold-700)' : 'var(--violet-700)', border: '1px solid transparent', paddingLeft: 0, paddingRight: 0 };
    default: return { background: press ? 'var(--violet-900)' : hover ? 'var(--violet-800)' : 'var(--violet-700)', color: 'var(--white)', border: '1px solid transparent' };
  }
}

export function Button({ variant = 'primary', size = 'md', disabled = false, fullWidth = false, iconLeft, iconRight, type = 'button', onClick, children, style }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const p = palette(variant, hover && !disabled, press && !disabled);
  return (
    <button type={type} disabled={disabled} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        height: s.height, padding: s.padding, fontSize: s.fontSize, width: fullWidth ? '100%' : undefined,
        fontFamily: 'var(--font-body)', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase',
        borderRadius: 'var(--radius-pill)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
        transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',
        textDecoration: variant === 'ghost' ? 'underline' : 'none', textUnderlineOffset: 6, textDecorationColor: 'var(--gold-700)',
        outlineOffset: 2, whiteSpace: 'nowrap', ...p, ...style,
      }}>
      {iconLeft}{children}{iconRight}
    </button>
  );
}
