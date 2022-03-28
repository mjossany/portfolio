import React from 'react';
import { render, screen } from '../../test-utils/testing-library-utils';
import Sidebar from '../../components/Sidebar/Sidebar';

describe('Sidebar component tests', () => {
  it('Tests if the Sidebar renders all buttons', () => {
    render(<Sidebar />);
    const linksText = ['Home', 'About', 'Resume', 'Portfolio', 'Blogs', 'Contact'];
    const links = screen.getAllByRole('link');
    links.forEach((btn, index) => {
      expect(btn).toHaveTextContent(linksText[index]);
    });
  });

  it('Tests if an image is rendered on the Sidebar', () => {
    render(<Sidebar />);
    const avatarImage = screen.getByRole('img');
    expect(avatarImage).toBeInTheDocument();
  });
});
