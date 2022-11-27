/* eslint-disable no-undef */
/* eslint-disable import/named */
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from '../App';

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        Response: {
          count: 6,
          next: null,
          previous: null,
          results: [
            {
              title: 'A New Hope',
              episode_id: 4,
            },
            {
              title: 'The Empire Strikes Back',
              episode_id: 5,
            },
          ],
        },
      }),
  }),
);

describe('App', () => {
  it('renders app component', () => {
    render(<App />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Type to search...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Sort By...')).toBeInTheDocument();
  });

  it('renders loader', () => {
    render(<App />);
    screen.getByText('Loading...');
  });

  it('fetches movies from an API and displays them', async () => {
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it('sort', () => {
    vi.mock('./utils/utils', () => {
      return {
        sortByID: vi.fn().mockImplementation(() => {
          return [{ episode_id: 4 }, { episode_id: 5 }];
        }),
      };
    });
  });
});
