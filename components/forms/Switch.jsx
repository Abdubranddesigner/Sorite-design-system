import React from 'react';

export function Switch({ label, checked, defaultChecked = false, onChange, disabled = false, style }) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => { if (disabled) return; if (checked === undefined) setInner(!on); onChange && onChange(!on); };
  return (
    <label onClick={(e) => { e.preventDefault(); toggle(); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--ink)', ...style }}>
      <span role="switch" aria-checked={on} style={{ width: 44, height: 24, borderRadius: 999, background: on ? 'var(--violet-700)' : 'var(--violet-200)', position: 'relative', transition: 'background var(--dur-base) var(--ease-out)', flexShrink: 0 }}>
        <span style={{ position: 'absolute', top: 3, left: on ? 23 : 3, width: 18, height: 18, borderRadius: '50%', background: on ? 'var(--gold-500)' : 'var(--white)', transition: 'left var(--dur-base) var(--ease-out), background var(--dur-base)' }} />
      </span>
      {label}
    </label>
  );
}
