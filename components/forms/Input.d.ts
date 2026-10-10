/** Text field with uppercase label, gold focus ring, optional hint/error. */
export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'tel' | 'date' | 'time' | 'number' | 'password';
  hint?: string;
  /** replaces hint, turns border Terra Ember */
  error?: string;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
