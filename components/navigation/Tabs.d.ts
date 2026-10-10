/** Underline tabs with uppercase tracked labels and a gold active rule. */
export interface TabItem { value: string; label: string }
export interface TabsProps {
  items: Array<string | TabItem>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onDark?: boolean;
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
