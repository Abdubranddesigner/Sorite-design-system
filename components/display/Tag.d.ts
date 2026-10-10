/** Pill chip for filters and ingredients; selectable and optionally removable. */
export interface TagProps {
  selected?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
