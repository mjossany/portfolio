import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from '../../components/Title/Title';

describe('Title component tests', () => {
  it('Tests component renderization', () => {
    render(<Title title="Oi" span="Teste" />);

    expect(screen.getByText('Oi')).toBeInTheDocument();
  });
});
