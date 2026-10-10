import React from 'react';

export function IconButton({ variant = 'outline', size = 40, label, disabled = false, onClick, children, style }) {
  const [hover, setHover] = React.useState(false);
  const v = {
    solid: { background: hover ? 'var(--violet-800)' : 'var(--violet-700)', color: 'var(--white)', border: '1px solid transparent' },
    outline: { background: hover ? 'var(--violet-100)' : 'transparent', color: 'var(--violet-700)', border: '1px solid var(--gold-700)' },
    ghost: { background: hover ? 'var(--violet-100)' : 'transparent', color: 'var(--violet-700)', border: '1px solid transparent' },
    inverse: { background: hover ? 'rgba(255,255,255,.1)' : 'transparent', color: 'var(--white)', border: '1px solid var(--gold-700)' },
  }[variant];
  return (
    <button type="button" aria-label={label} title={label} disabled={disabled} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ width: size, height: size, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        padding: 0, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
        transition: 'background var(--dur-base) var(--ease-out)', ...v, ...style }}>
      {children}
    </button>
  );
}
