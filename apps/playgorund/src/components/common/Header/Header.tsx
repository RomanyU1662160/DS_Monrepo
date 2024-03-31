import styles from './Header.module.css';
import { Panel } from '@ds-monorepo/components-ui';
/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <Panel className="panel-primary">
      <h1> This is a panel from the design-system</h1>
    </Panel>
  );
}

export default Header;
