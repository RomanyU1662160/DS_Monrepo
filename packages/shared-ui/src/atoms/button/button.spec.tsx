import { render, screen } from '@testing-library/react';

import Button from './button';

describe('Button', () => {
  it('should render successfully', () => {
     render(<Button label='Test' />);
     expect(screen.getByRole('button')).toBeTruthy();

  });
});
