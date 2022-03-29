import React from 'react';
import { render, screen } from '../../test-utils/testing-library-utils';
import BlogsPage from '../../pages/BlogsPage';

describe('BlogsPage page tests', () => {
  it('Tests if the BlogsPageComponent is rendering', () => {
    render(<BlogsPage />);
    const blogsPageH2 = screen.getByRole('heading', { level: 2 });
    expect(blogsPageH2).toBeInTheDocument();
  });
});
