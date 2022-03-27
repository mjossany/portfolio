import React from 'react';
import { render } from '../../test-utils/testing-library-utils';
import Sidebar from '../../components/Sidebar/Sidebar';

describe('Sidebar component tests', () => {
  it('Tests if the Sidebar renders all buttons', () => {
    render(<Sidebar />);
  });
});
