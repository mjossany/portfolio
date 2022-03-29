import React from 'react';
import { render, screen } from '../../test-utils/testing-library-utils';
import ResumePageComponent from '../../components/ResumePageComponent/ResumePageComponent';

describe('ResumePageComponent component tests', () => {
  it('Tests if the ResumePageComponent is being rendered', () => {
    render(<ResumePageComponent />);
    const resumePageH2 = screen.getAllByRole('heading', { level: 2 });
    expect(resumePageH2[1]).toHaveTextContent(/^ResumeResume$/);
  });
});
