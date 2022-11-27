/* eslint-disable import/named */
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Details from "../src/components/Details";

describe('Details', () => {
  it('renders initial details screen', () => {
    render(<Details />);
    expect(screen.getByText('No movie selected')).toBeInTheDocument();
  });
});
