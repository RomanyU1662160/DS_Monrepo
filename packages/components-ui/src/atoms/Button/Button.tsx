import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function Button({ text }: ButtonProps) {
  return <button className={styles.button}>{text}</button>;
}

export default Button;