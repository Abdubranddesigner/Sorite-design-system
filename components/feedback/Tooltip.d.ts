/** Small deep-violet hint on hover/focus. */
export interface TooltipProps {
  label: React.ReactNode;
  placement?: 'top' | 'bottom';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
