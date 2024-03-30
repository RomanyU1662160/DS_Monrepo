import styles from './Button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function Button({ text }: ButtonProps) {
  return <button className={styles.button}>{text}</button>;
}

export default Button;
