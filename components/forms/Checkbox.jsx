import React from 'react';

export function Checkbox({ label, checked, defaultChecked = false, onChange, disabled = false, style }) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => { if (disabled) return; if (checked === undefined) setInner(!on); onChange && onChange(!on); };
  return (
    <label onClick={(e) => { e.preventDefault(); toggle(); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--ink)', ...style }}>
      <span role="checkbox" aria-checked={on} tabIndex={0} onKeyDown={(e) => { if (e.key === ' ') { e.preventDefault(); toggle(); } }}
        style={{ width: 20, height: 20, borderRadius: 4, border: '1px solid ' + (on ? 'var(--violet-700)' : 'var(--border-field)'), background: on ? 'var(--violet-700)' : 'var(--white)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'background var(--dur-fast)', flexShrink: 0 }}>
        {on && <svg width="12" height="9" viewBox="0 0 12 9"><path d="M1 4.5l3.2 3L11 1" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>}
      </span>
      {label}
    </label>
  );
}
