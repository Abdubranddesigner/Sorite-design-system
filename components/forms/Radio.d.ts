/** Radio group. Options may carry a muted meta string (e.g. price or duration). */
export interface RadioOption { value: string; label: string; meta?: string }
export interface RadioProps {
  name?: string;
  options: Array<string | RadioOption>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  direction?: 'row' | 'column';
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Radio(props: RadioProps): JSX.Element;
