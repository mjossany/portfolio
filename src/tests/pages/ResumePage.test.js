import React from 'react';
import { render, screen } from '../../test-utils/testing-library-utils';
import ResumePage from '../../pages/ResumePage';

describe('ContactPage page tests', () => {
  it('Tests if the ContactPage is rendering', () => {
    render(<ResumePage />);
    const resumePageH2 = screen.getAllByRole('heading', { level: 2 });
    expect(resumePageH2[1]).toHaveTextContent(/^ResumeResume$/);
  });
});
