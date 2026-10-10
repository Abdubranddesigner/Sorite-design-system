/**
 * Stacked uppercase section title in the display face, as on every guideline page.
 * @startingPoint section="Brand" subtitle="Stacked uppercase section title with eyebrow" viewport="700x240"
 */
export interface SectionHeadingProps {
  /** small tracked label above the title, gold */
  eyebrow?: string;
  /** use \n to stack: "BRAND\nFOUNDATION" */
  title: string;
  description?: string;
  /** gold title + white body for violet grounds */
  onDark?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
