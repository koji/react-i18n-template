import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';
import '../i18n/config';

describe('App', () => {
  it('renders welcome message', () => {
    render(<App />);
    expect(screen.getByText('Welcome to React i18n')).toBeInTheDocument();
  });

  it('renders language selector', () => {
    render(<App />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});