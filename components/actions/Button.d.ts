/**
 * Pill button with uppercase tracked label.
 * @startingPoint section="Actions" subtitle="Primary, accent, outline and inverse pill buttons" viewport="700x260"
 */
export interface ButtonProps {
  /** primary = Royal Violet; accent = Heritage Gold; outline = gold hairline; inverse / outline-inverse for violet grounds; ghost = underlined text */
  variant?: 'primary' | 'accent' | 'outline' | 'inverse' | 'outline-inverse' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
