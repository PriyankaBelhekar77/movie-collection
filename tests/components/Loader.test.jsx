/* eslint-disable import/named */
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Loader from '../../src/components/Loader';

describe('Loader', () => {
  it('renders loader', () => {
    render(<Loader />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
