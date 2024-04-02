import { render } from '@testing-library/react';

import TickList from './TickList';

describe('TickList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TickList />);
    expect(baseElement).toBeTruthy();
  });
});
