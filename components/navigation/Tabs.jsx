import React from 'react';

export function Tabs({ items = [], value, defaultValue, onChange, onDark = false, style }) {
  const norm = items.map((i) => (typeof i === 'string' ? { value: i, label: i } : i));
  const [inner, setInner] = React.useState(defaultValue ?? (norm[0] && norm[0].value));
  const cur = value !== undefined ? value : inner;
  return (
    <div role="tablist" style={{ display: 'flex', gap: 32, borderBottom: '1px solid ' + (onDark ? 'rgba(255,255,255,.18)' : 'var(--violet-200)'), overflowX: 'auto', overflowY: 'hidden', scrollbarWidth: 'none', fontFamily: 'var(--font-body)', ...style }}>
      {norm.map((t) => {
        const on = t.value === cur;
        return (
          <button key={t.value} role="tab" aria-selected={on} type="button" onClick={() => { if (value === undefined) setInner(t.value); onChange && onChange(t.value); }}
            style={{ background: 'none', border: 0, padding: '14px 0', cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'inherit', fontSize: 12.5, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase',
              color: on ? (onDark ? 'var(--gold-500)' : 'var(--violet-700)') : (onDark ? 'var(--violet-200)' : 'var(--ink-3)'),
              borderBottom: '2px solid ' + (on ? 'var(--gold-700)' : 'transparent'), transition: 'color var(--dur-fast), border-color var(--dur-base)' }}>
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
