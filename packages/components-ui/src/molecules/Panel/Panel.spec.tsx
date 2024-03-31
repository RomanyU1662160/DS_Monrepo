import { render } from '@testing-library/react';

import Panel from './Panel';

describe('Panel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Panel>
        <h1> test</h1>{' '}
      </Panel>,
    );
    expect(baseElement).toBeTruthy();
  });
});
