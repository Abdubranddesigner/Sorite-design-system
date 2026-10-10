import React from 'react';

const FILES = { primary: 'soreti-logo-primary.svg', white: 'soreti-logo-white.svg', lotus: 'soreti-lotus.svg', 'app-icon': 'soreti-app-icon.svg' };
const MIN = { primary: 120, white: 120, lotus: 50, 'app-icon': 50 };

export function Logo({ variant = 'primary', width, assetBase = 'assets/logo', alt = 'Soreti Wellness & Spa', style }) {
  const w = Math.max(width || (variant === 'primary' || variant === 'white' ? 200 : 64), MIN[variant] || 50);
  return <img src={assetBase.replace(/\/$/, '') + '/' + (FILES[variant] || FILES.primary)} alt={alt} width={w} style={{ display: 'block', width: w, height: 'auto', ...style }} />;
}
