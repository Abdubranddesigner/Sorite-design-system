/** Native select styled to match Input; gold chevron. */
export interface SelectOption { value: string; label: string }
export interface SelectProps {
  label?: string;
  options: Array<string | SelectOption>;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
