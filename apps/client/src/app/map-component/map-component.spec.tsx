import { render } from '@testing-library/react';

import MapComponent from './map-component';

describe('MapComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MapComponent />);
    expect(baseElement).toBeTruthy();
  });
});
