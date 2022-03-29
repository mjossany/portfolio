import React from 'react';
import { render, screen } from '../../test-utils/testing-library-utils';
import ContactPageComponent from '../../components/ContactPageComponent/ContactPageComponent';

describe('ContactPageComponent component tests', () => {
  it('Tests if the ContactPageComponent is rendered', () => {
    render(<ContactPageComponent />);
    const contactPageH2 = screen.getByRole('headin', { level: 2 });
    expect(contactPageH2).toBeInTheDocument();
  });
});
