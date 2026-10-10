import React from 'react';

const toPascal = (n) => String(n).replace(/(^|[-_\s])(\w)/g, (_, __, c) => c.toUpperCase());

export function Icon({ name, size = 20, strokeWidth = 1.5, color = 'currentColor', style, title }) {
  const [, setTick] = React.useState(0);
  const lib = typeof window !== 'undefined' ? window.lucide : null;
  React.useEffect(() => {
    if (lib) return;
    let n = 0;
    const t = setInterval(() => { n++; if (window.lucide || n > 40) { clearInterval(t); setTick((x) => x + 1); } }, 100);
    return () => clearInterval(t);
  }, [lib]);
  const node = lib && lib.icons ? lib.icons[toPascal(name)] : null;
  const children = node ? (node[0] === 'svg' ? node[2] : node) : [];
  return React.createElement('svg', {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color,
    strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round',
    style: { display: 'inline-block', flexShrink: 0, verticalAlign: 'middle', ...style },
    'aria-hidden': title ? undefined : true, role: title ? 'img' : undefined,
  }, title ? React.createElement('title', null, title) : null,
    (children || []).map(([tag, attrs], i) => React.createElement(tag, { key: i, ...attrs })));
}
