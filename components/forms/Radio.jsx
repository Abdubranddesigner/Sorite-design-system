import React from 'react';

export function Radio({ name, options = [], value, defaultValue, onChange, direction = 'column', disabled = false, style }) {
  const [inner, setInner] = React.useState(defaultValue);
  const cur = value !== undefined ? value : inner;
  return (
    <div role="radiogroup" style={{ display: 'flex', flexDirection: direction, gap: direction === 'row' ? 24 : 12, fontFamily: 'var(--font-body)', ...style }}>
      {options.map((o) => {
        const opt = typeof o === 'string' ? { value: o, label: o } : o;
        const on = cur === opt.value;
        return (
          <label key={opt.value} onClick={(e) => { e.preventDefault(); if (disabled) return; if (value === undefined) setInner(opt.value); onChange && onChange(opt.value); }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 15, color: 'var(--ink)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1 }}>
            <span role="radio" aria-checked={on} style={{ width: 20, height: 20, borderRadius: '50%', border: '1px solid ' + (on ? 'var(--violet-700)' : 'var(--border-field)'), display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--white)', flexShrink: 0 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--violet-700)', transform: on ? 'scale(1)' : 'scale(0)', transition: 'transform var(--dur-fast) var(--ease-out)' }} />
            </span>
            <span>{opt.label}{opt.meta && <span style={{ color: 'var(--ink-3)', marginLeft: 8, fontSize: 13 }}>{opt.meta}</span>}</span>
          </label>
        );
      })}
    </div>
  );
}
