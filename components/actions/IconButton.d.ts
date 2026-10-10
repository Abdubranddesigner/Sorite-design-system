/** Circular icon-only button. Always pass an accessible label. */
export interface IconButtonProps {
  variant?: 'solid' | 'outline' | 'ghost' | 'inverse';
  /** diameter px, default 40 */
  size?: number;
  /** accessible name, also used as tooltip */
  label: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /** usually an <Icon /> */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
