import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../test-utils/testing-library-utils';
import MainContent from '../../components/MainContent/MainContent';

describe('MainContent component tests', () => {
  it('Tests if MainContent is rendering', () => {
    render(<MainContent />);
    const mainSection = screen.getByRole('main');
    expect(mainSection).toBeInTheDocument();
    userEvent.click(mainSection);
  });
});
