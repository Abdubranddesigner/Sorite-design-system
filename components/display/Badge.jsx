import React from 'react';

export function Badge({ tone = 'violet', solid = false, children, style }) {
  const t = {
    violet: ['var(--violet-700)', 'var(--violet-100)'],
    gold: ['var(--gold-800)', 'var(--gold-200)'],
    ember: ['var(--ember-700)', 'var(--ember-200)'],
    neutral: ['var(--ink-2)', '#f1efed'],
  }[tone] || ['var(--violet-700)', 'var(--violet-100)'];
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', height: 22, padding: '0 10px', borderRadius: 'var(--radius-xs)', fontFamily: 'var(--font-body)', fontSize: 10.5, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', whiteSpace: 'nowrap',
      color: solid ? 'var(--white)' : t[0], background: solid ? t[0] : t[1], ...style }}>{children}</span>
  );
}
