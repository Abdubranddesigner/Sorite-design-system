/**
 * The official Soreti mark. Never recolour, stretch or add effects; width is clamped to the guideline minimums (120px lockup, 50px symbol).
 */
export interface LogoProps {
  /** primary = violet lockup on light; white = for violet grounds; lotus = symbol only; app-icon = lotus on violet tile */
  variant?: 'primary' | 'white' | 'lotus' | 'app-icon';
  /** px; clamped to minimum size */
  width?: number;
  /** folder holding the logo SVGs, relative to the page. Default "assets/logo" */
  assetBase?: string;
  alt?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
