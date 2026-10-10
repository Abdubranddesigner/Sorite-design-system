/** Modal dialog on a violet scrim; white panel with a gold top rule. */
export interface DialogProps {
  open?: boolean;
  title?: React.ReactNode;
  eyebrow?: string;
  children?: React.ReactNode;
  /** buttons, right-aligned */
  actions?: React.ReactNode;
  /** called on scrim click, close button and Esc */
  onClose?: () => void;
  width?: number;
  style?: React.CSSProperties;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
