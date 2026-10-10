import React from 'react';

export function Toast({ tone = 'default', title, message, onClose, style }) {
  const accent = { default: 'var(--gold-700)', success: 'var(--success)', error: 'var(--ember-700)' }[tone] || 'var(--gold-700)';
  return (
    <div role="status" style={{ display: 'flex', gap: 14, alignItems: 'flex-start', width: 360, maxWidth: '100%', boxSizing: 'border-box', padding: '16px 18px', background: 'var(--violet-700)', color: 'var(--white)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-float)', fontFamily: 'var(--font-body)', ...style }}>
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: accent, marginTop: 7, flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 500, color: 'var(--gold-500)', lineHeight: 1.3 }}>{title}</div>}
        {message && <div style={{ fontSize: 14, lineHeight: 1.55, marginTop: title ? 4 : 0 }}>{message}</div>}
      </div>
      {onClose && <button type="button" aria-label="Dismiss" onClick={onClose} style={{ background: 'none', border: 0, color: 'var(--violet-200)', cursor: 'pointer', padding: 4 }}>
        <svg width="10" height="10" viewBox="0 0 12 12"><path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg></button>}
    </div>
  );
}
