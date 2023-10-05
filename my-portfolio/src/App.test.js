import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  const { getByText } = render(<App />);
  
  const homeElement = getByText('Home');
  const aboutElement = getByText('About');
  const skillsElement = getByText('Skills');
  const projectsElement = getByText('Projects');
  const contactElement = getByText('Contact');

  expect(homeElement).toBeInTheDocument();
  expect(aboutElement).toBeInTheDocument();
  expect(skillsElement).toBeInTheDocument();
  expect(projectsElement).toBeInTheDocument();
  expect(contactElement).toBeInTheDocument();
});
