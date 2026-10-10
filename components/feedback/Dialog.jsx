import React from 'react';

export function Dialog({ open = false, title, eyebrow, children, actions, onClose, width = 520, style }) {
  React.useEffect(() => {
    if (!open || !onClose) return;
    const k = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(47,20,73,.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, zIndex: 1000 }}>
      <div role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}
        style={{ width: '100%', maxWidth: width, background: 'var(--white)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-float)', padding: 36, position: 'relative', fontFamily: 'var(--font-body)', borderTop: '3px solid var(--gold-700)', ...style }}>
        {onClose && <button type="button" aria-label="Close" onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, width: 32, height: 32, borderRadius: '50%', border: 0, background: 'transparent', cursor: 'pointer', color: 'var(--violet-700)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="12" height="12" viewBox="0 0 12 12"><path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg></button>}
        {eyebrow && <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-700)', marginBottom: 10 }}>{eyebrow}</div>}
        {title && <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 500, lineHeight: 1.15, color: 'var(--violet-700)', marginBottom: 14 }}>{title}</div>}
        <div style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink)' }}>{children}</div>
        {actions && <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 28, flexWrap: 'wrap' }}>{actions}</div>}
      </div>
    </div>
  );
}
