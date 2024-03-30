import styles from './components-ui.module.css';

/* eslint-disable-next-line */
export interface ComponentsUiProps {}

export function ComponentsUi(props: ComponentsUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ComponentsUi!</h1>
    </div>
  );
}

export default ComponentsUi;
