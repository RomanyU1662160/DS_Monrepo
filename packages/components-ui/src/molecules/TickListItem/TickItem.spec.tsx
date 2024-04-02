import { render } from '@testing-library/react';

import TickItem from './TickItem';

describe('TickItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TickItem />);
    expect(baseElement).toBeTruthy();
  });
});
