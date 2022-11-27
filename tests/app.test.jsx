import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  test('hello world', () => {
    render(<App />);
    screen.debug();
  });
});
