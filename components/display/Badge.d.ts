/** Small uppercase status label — "Soreti Signature", "New", "Exclusive". */
export interface BadgeProps {
  tone?: 'violet' | 'gold' | 'ember' | 'neutral';
  solid?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
