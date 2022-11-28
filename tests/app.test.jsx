/* eslint-disable no-undef */
/* eslint-disable import/named */
import { render, screen, act, waitFor, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from '../src/App';
import * as API from '../src/api';
import MovieData from './fixtures/MovieData';

describe('App', () => {
  beforeEach(() => {
    vi.spyOn(API, 'getFilmsData').mockResolvedValueOnce(MovieData);
  });

  it('should render app component', () => {
    render(<App />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Type to search...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Sort By...')).toBeInTheDocument();
  });

  describe('Api call', () => {
    it('should display the episode list on successful api call', async () => {
      act(() => render(<App />));
      await waitFor(() => screen.getByText('EPISODE 4'));
      expect(screen.getByText('EPISODE 4')).toBeInTheDocument();
    });
    it('should display error on failed api call', async () => {
      const error = {
        error: true,
        message: 'Failed to fetch data',
      };
      vi.spyOn(API, 'getFilmsData').mockResolvedValue(error);
      act(() => render(<App />));
      await waitFor(() => screen.getByText('Failed to fetch data'));
      expect(screen.getByText('Failed to fetch data')).toBeInTheDocument();
    });
  });

  describe('Details', () => {
    it('should display movie details on click of movie', async () => {
      act(() => render(<App />));
      await waitFor(() => screen.getByText('EPISODE 4'));
      fireEvent.click(screen.getByText('EPISODE 4'));
      expect(screen.getByText('Directed by: George Lucas')).toBeInTheDocument();
    });
  });

  describe('Search', () => {
    it('should filter list based on search text', async () => {
      act(() => render(<App />));
      await waitFor(() => screen.getByText('EPISODE 4'));
      fireEvent.change(screen.getByPlaceholderText('Type to search...'), {
        target: { value: 'The Empire' },
      });
      expect(screen.getByText('Episode V - The Empire Strikes Back')).toBeInTheDocument();
    });
  });
});
