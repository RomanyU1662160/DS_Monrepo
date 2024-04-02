import { useState } from 'react';
import Tick from '../../atoms/Tick/Tick';
import styles from './TickItem.module.css';

/* eslint-disable-next-line */
export interface TickItemProps extends React.HTMLAttributes<HTMLDivElement> {
  item: {
    text: string;
  };
  selected?: boolean;
}

export function TickItem({ item, selected, ...props }: TickItemProps) {
  return (
    <div className={`list-item ${selected ? 'selected' : ''}`} {...props}>
      <Tick className="tick-success" /> {item.text}
    </div>
  );
}

export default TickItem;
