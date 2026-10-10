/** Transient notification: violet panel, gold display title, small status dot. */
export interface ToastProps {
  tone?: 'default' | 'success' | 'error';
  title?: React.ReactNode;
  message?: React.ReactNode;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
