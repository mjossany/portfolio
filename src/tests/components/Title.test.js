import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from '../../components/Title/Title';

describe('Title component tests', () => {
  it('Tests component renderization', () => {
    render(<Title title="Oi" span="Teste" />);
    expect(screen.getByText('Oi')).toBeInTheDocument();
  });

  it('Tests if the Title component render the right content', () => {
    render(<Title title="Testing" span="Shadow" />);

    const titleProp = screen.getByRole('heading', { level: 2 });
    expect(titleProp).toHaveTextContent('Testing');
    expect(screen.getByText('Testing')).toBeInTheDocument();
  });
});
