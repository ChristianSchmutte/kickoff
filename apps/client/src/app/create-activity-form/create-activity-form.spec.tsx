import { render } from '@testing-library/react';

import CreateActivityForm from './create-activity-form';

describe('CreateActivityForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateActivityForm />);
    expect(baseElement).toBeTruthy();
  });
});
