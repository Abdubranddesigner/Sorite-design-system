/** Lotus repeat ground per the Brand Pattern page: tone-on-tone, generously spaced, 5–15% opacity. */
export interface LotusPatternProps {
  /** violet-tint = violet lotus on light violet; gold-on-violet = for deep violet panels; watermark = faint on white */
  tone?: 'violet-tint' | 'gold-on-violet' | 'watermark';
  /** lotus width in px, default 44 */
  size?: number;
  /** override opacity (keep 0.05–0.15 for watermark use) */
  opacity?: number;
  assetBase?: string;
  radius?: number | string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function LotusPattern(props: LotusPatternProps): JSX.Element;
