import React from 'react';
import matchMediaPolyfill from 'mq-polyfill';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../test-utils/testing-library-utils';
import Sidebar from '../../components/Sidebar/Sidebar';
import resizeTo from '../resizeTo';
import 'jest-styled-components';

matchMediaPolyfill(window);
window.resizeTo = resizeTo;

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

  it('Tests if the Sidebar hides when the screen is smaller than 1200px and if it reappers if the screen is bigger than 1200px', async () => {
    render(<Sidebar />);
    const sidebarNav = screen.getByRole('navigation');
    expect(sidebarNav.parentElement).toBeInTheDocument();

    act(() => window.resizeTo(800, 800));

    expect(sidebarNav.parentElement).toHaveStyleRule('transform', 'translateX(-100%)', { media: '(max-width:1200px)' });

    act(() => window.resizeTo(1201, 800));

    expect(sidebarNav.parentElement).toHaveStyleRule('transform', 'translateX(0)');
  });

  it('Tests if the page redirect correctly when the Sidebar links are clicked', async () => {
    const { history } = render(<Sidebar />);
    const sidebarLinks = screen.getAllByRole('link');
    sidebarLinks.forEach((link) => {
      const path = link.href.slice(16);
      userEvent.click(link);
      expect(history.location.pathname).toBe(path);
    });
  });
});
