import { render } from '@testing-library/react';

import ActivityContext from './activity-context';

describe('ActivityContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ActivityContext />);
    expect(baseElement).toBeTruthy();
  });
});
