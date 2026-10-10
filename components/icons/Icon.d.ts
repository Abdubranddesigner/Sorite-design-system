/**
 * Thin-stroke line icon. Renders a Lucide glyph (CDN substitute — the brand defines no icon set).
 * Requires <script src="https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js"></script> on the page.
 */
export interface IconProps {
  /** Lucide icon name, kebab or Pascal case: "calendar", "map-pin", "Phone" */
  name: string;
  /** px, default 20 */
  size?: number;
  /** default 1.5 — keep between 1.25 and 1.5 to match the wordmark */
  strokeWidth?: number;
  color?: string;
  title?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
