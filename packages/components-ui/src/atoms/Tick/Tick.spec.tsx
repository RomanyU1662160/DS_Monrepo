import { render } from '@testing-library/react';

import Tick from './Tick';

describe('Tick', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tick />);
    expect(baseElement).toBeTruthy();
  });
});
