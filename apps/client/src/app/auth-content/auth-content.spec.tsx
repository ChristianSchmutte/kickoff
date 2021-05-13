import { render } from '@testing-library/react';

import AuthContent from './auth-content';

describe('AuthContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthContent />);
    expect(baseElement).toBeTruthy();
  });
});
