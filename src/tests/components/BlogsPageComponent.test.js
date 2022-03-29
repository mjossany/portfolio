import React from 'react';
import { render, screen } from '../../test-utils/testing-library-utils';
import BlogsPageComponent from '../../components/BlogsPageComponent/BlogsPageComponent';

describe('BlogsPageComponent component tests', () => {
  it('Tests if the BlogsPageComponent is rendering', () => {
    render(<BlogsPageComponent />);
    const blogsPageH2 = screen.getByRole('heading', { level: 2 });
    expect(blogsPageH2).toBeInTheDocument();
  });
});
