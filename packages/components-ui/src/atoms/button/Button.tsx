import styles from './Button.module.css';
import '@ds-monorepo/design-system';

/* eslint-disable-next-line */
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export function Button({ text, children, ...props }: ButtonProps) {
  return <button {...props}>{text || children}</button>;
}

export default Button;
