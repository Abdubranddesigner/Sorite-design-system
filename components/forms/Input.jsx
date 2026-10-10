import React from 'react';

const labelStyle = { display: 'block', fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--violet-700)', marginBottom: 8 };
const hintStyle = (err) => ({ fontSize: 12, marginTop: 6, color: err ? 'var(--ember-700)' : 'var(--ink-3)' });
const boxStyle = (focus, err, disabled) => ({ display: 'flex', alignItems: 'center', gap: 10, height: 48, padding: '0 16px', borderRadius: 'var(--radius-sm)',
  border: '1px solid ' + (err ? 'var(--ember-700)' : focus ? 'var(--gold-700)' : 'var(--border-field)'), background: disabled ? 'var(--violet-100)' : 'var(--white)',
  boxShadow: focus ? '0 0 0 3px var(--gold-200)' : 'none', transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)', color: 'var(--violet-500)' });

export function Input({ label, placeholder, value, defaultValue, onChange, type = 'text', hint, error, disabled = false, iconLeft, id, style }) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || (label ? 'in-' + String(label).toLowerCase().replace(/\W+/g, '-') : undefined);
  return (
    <div style={{ fontFamily: 'var(--font-body)', ...style }}>
      {label && <label htmlFor={fid} style={labelStyle}>{label}</label>}
      <div style={boxStyle(focus, !!error, disabled)}>
        {iconLeft}
        <input id={fid} type={type} placeholder={placeholder} value={value} defaultValue={defaultValue} onChange={onChange} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ flex: 1, minWidth: 0, border: 0, outline: 0, background: 'transparent', font: 'inherit', fontSize: 15, color: 'var(--ink)', height: '100%' }} />
      </div>
      {(error || hint) && <div style={hintStyle(!!error)}>{error || hint}</div>}
    </div>
  );
}
