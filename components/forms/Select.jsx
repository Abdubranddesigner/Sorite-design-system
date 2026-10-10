import React from 'react';

const labelStyle = { display: 'block', fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--violet-700)', marginBottom: 8 };
const hintStyle = (err) => ({ fontSize: 12, marginTop: 6, color: err ? 'var(--ember-700)' : 'var(--ink-3)' });
const boxStyle = (focus, err, disabled) => ({ display: 'flex', alignItems: 'center', gap: 10, height: 48, padding: '0 16px', borderRadius: 'var(--radius-sm)',
  border: '1px solid ' + (err ? 'var(--ember-700)' : focus ? 'var(--gold-700)' : 'var(--border-field)'), background: disabled ? 'var(--violet-100)' : 'var(--white)',
  boxShadow: focus ? '0 0 0 3px var(--gold-200)' : 'none', transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)', color: 'var(--violet-500)' });

export function Select({ label, options = [], value, defaultValue, onChange, placeholder, hint, error, disabled = false, id, style }) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || (label ? 'sel-' + String(label).toLowerCase().replace(/\W+/g, '-') : undefined);
  return (
    <div style={{ fontFamily: 'var(--font-body)', ...style }}>
      {label && <label htmlFor={fid} style={labelStyle}>{label}</label>}
      <div style={{ ...boxStyle(focus, !!error, disabled), position: 'relative', padding: 0 }}>
        <select id={fid} value={value} defaultValue={defaultValue === undefined && value === undefined && placeholder ? '' : defaultValue} onChange={onChange} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ appearance: 'none', WebkitAppearance: 'none', width: '100%', height: '100%', border: 0, outline: 0, background: 'transparent', font: 'inherit', fontSize: 15, color: 'var(--ink)', padding: '0 44px 0 16px', cursor: 'pointer' }}>
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((o) => { const opt = typeof o === 'string' ? { value: o, label: o } : o; return <option key={opt.value} value={opt.value}>{opt.label}</option>; })}
        </select>
        <svg width="12" height="8" viewBox="0 0 12 8" style={{ position: 'absolute', right: 18, pointerEvents: 'none' }}><path d="M1 1.5l5 5 5-5" fill="none" stroke="var(--gold-700)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>
      {(error || hint) && <div style={hintStyle(!!error)}>{error || hint}</div>}
    </div>
  );
}
