/* eslint-disable import/named */
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Search from '../../src/components/Search';

describe('Search', () => {
  it('should render initial search screen', () => {
    render(<Search />);
    expect(screen.getByPlaceholderText('Type to search...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Sort By...')).toBeInTheDocument();
  });
});
