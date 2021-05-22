import { render } from '@testing-library/react';

import GetStarted from './get-started';

describe('GetStarted', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GetStarted />);
    expect(baseElement).toBeTruthy();
  });
});
