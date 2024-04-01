import styles from './Tick.module.css';

/* eslint-disable-next-line */
export interface TickProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Tick({ ...props }: TickProps) {
  return <div {...props}></div>;
}

export default Tick;
