import React from 'react';

export function Tooltip({ label, placement = 'top', children, style }) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom' ? { top: 'calc(100% + 8px)' } : { bottom: 'calc(100% + 8px)' };
  return (
    <span onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} onFocus={() => setShow(true)} onBlur={() => setShow(false)}
      style={{ position: 'relative', display: 'inline-flex', ...style }}>
      {children}
      <span role="tooltip" style={{ position: 'absolute', left: '50%', ...pos, transform: 'translateX(-50%) translateY(' + (show ? '0' : placement === 'bottom' ? '-4px' : '4px') + ')', opacity: show ? 1 : 0, pointerEvents: 'none',
        transition: 'opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)', background: 'var(--violet-900)', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: 12.5, lineHeight: 1.4,
        padding: '7px 12px', borderRadius: 'var(--radius-sm)', whiteSpace: 'nowrap', zIndex: 50 }}>{label}</span>
    </span>
  );
}
