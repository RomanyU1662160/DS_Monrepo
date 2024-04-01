import styles from './Panel.module.css';
import { Panel as DsPanel } from '@ds-monorepo/components-ui';
/* eslint-disable-next-line */
export interface PanelProps {}

export function Panel(props: PanelProps) {
  return (
    <DsPanel className="panel-primary">
      <h1>This is a panel from the DS </h1>
    </DsPanel>
  );
}

export default Panel;
