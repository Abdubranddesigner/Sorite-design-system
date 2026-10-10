/**
 * Content card. Default is white with a 1px Heritage Gold hairline and 10px radius; flat, no shadow.
 * @startingPoint section="Display" subtitle="Service card with gold hairline" viewport="700x380"
 */
export interface CardProps {
  variant?: 'hairline' | 'plain' | 'violet' | 'tint';
  /** image or placeholder shown 4:3 on top */
  media?: React.ReactNode;
  eyebrow?: string;
  title?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  /** makes the card interactive (gentle lift on hover) */
  onClick?: () => void;
  padding?: number;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
