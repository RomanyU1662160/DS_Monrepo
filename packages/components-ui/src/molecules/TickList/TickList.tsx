import { useState } from 'react';
import Tick from '../../atoms/Tick/Tick';
import TickItem from '../TickListItem/TickItem';
import styles from './TickList.module.css';
import { it } from 'node:test';

interface ListItem {
  text: string;
}

export interface TickListProps extends React.HTMLAttributes<HTMLDivElement> {
  items: ListItem[];
}

export function TickList({ items, ...props }: TickListProps) {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleIsSelected = (index: number) => {
    const selectedItem = items[index];
    setSelectedItem(selectedItem);
  };

  return (
    <div {...props} className={styles['tick-list']}>
      {items.map((item, index) => {
        if (selectedItem === item) {
          console.log('selectedItem:::>>>', selectedItem);
          console.log('item:::>>>', item);
        }
        return (
          <TickItem
            key={`item-${index}`}
            item={item}
            selected={selectedItem === item}
            onClick={() => handleIsSelected(index)}
          />
        );
      })}
    </div>
  );
}

export default TickList;
