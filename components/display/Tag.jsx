import React from 'react';

export function Tag({ selected = false, onClick, onRemove, children, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <span onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 34, padding: onRemove ? '0 10px 0 16px' : '0 16px', borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-body)', fontSize: 14,
        cursor: onClick ? 'pointer' : 'default', transition: 'background var(--dur-fast), color var(--dur-fast)',
        border: '1px solid ' + (selected ? 'var(--violet-700)' : 'var(--gold-400)'),
        background: selected ? 'var(--violet-700)' : hover && onClick ? 'var(--gold-200)' : 'var(--white)',
        color: selected ? 'var(--white)' : 'var(--violet-700)', ...style }}>
      {children}
      {onRemove && <span role="button" aria-label="Remove" onClick={(e) => { e.stopPropagation(); onRemove(); }} style={{ display: 'inline-flex', width: 18, height: 18, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', cursor: 'pointer' }}>
        <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1 1l6 6M7 1L1 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg></span>}
    </span>
  );
}
