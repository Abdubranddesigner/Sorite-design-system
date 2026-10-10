/**
 * One line of the treatment menu: name, optional meta/duration, description, and one or more prices.
 * @startingPoint section="Display" subtitle="Treatment menu line with duration and price" viewport="700x300"
 */
export interface PriceRowPrice { label?: string; amount: string }
export interface PriceRowProps {
  name: string;
  description?: string;
  /** uppercase line under the name, e.g. "90 MIN | Skin analysis, HydraFacial, LED" */
  meta?: string;
  /** e.g. [{label:'60 MIN', amount:'3,400 ETB'}, {label:'90 MIN', amount:'3,900 ETB'}] */
  prices?: PriceRowPrice[];
  badge?: React.ReactNode;
  onDark?: boolean;
  style?: React.CSSProperties;
}
export declare function PriceRow(props: PriceRowProps): JSX.Element;
