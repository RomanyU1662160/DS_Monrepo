import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  handleClick?: () => void;
}

export function Button({ label, handleClick }: ButtonProps) {
  const onBtnClick = () => {
    handleClick ? handleClick() : console.log('clicked');
  };
  return <button onClick={onBtnClick}> {label}</button>;
}

export default Button;
