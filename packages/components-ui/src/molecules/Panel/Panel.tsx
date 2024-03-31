import styles from './Panel.module.css';

/* eslint-disable-next-line */
export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Panel({ children, ...props }: PanelProps) {
  return <div {...props}>{children}</div>;
}

export default Panel;
