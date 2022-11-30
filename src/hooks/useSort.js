import { useMemo } from 'react';
import { sortByID, sortByYear, sortTitlesByAscendingOrder, sortTitlesByDescendingOrder } from '../utils';
import { OPTIONS } from '../constants';

export function useSort(filterMovies, movieData, sortMoviesBy) {
  const sortResult = useMemo(() => {
    if (sortMoviesBy === OPTIONS.episode) {
      if (filterMovies.length) {
        return sortByID([...filterMovies]);
      } else {
        return sortByID([...movieData]);
      }
    }
    if (sortMoviesBy === OPTIONS.year || sortMoviesBy.includes('Sort')) {
      if (filterMovies.length) {
        return sortByYear([...filterMovies]);
      } else {
        return sortByYear([...movieData]);
      }
    }
    if (sortMoviesBy === OPTIONS.titleAsc) {
      if (filterMovies.length) {
        return sortTitlesByAscendingOrder([...filterMovies]);
      } else {
        return sortTitlesByAscendingOrder([...movieData]);
      }
    }
    if (sortMoviesBy === OPTIONS.titleDesc) {
      if (filterMovies.length) {
        return sortTitlesByDescendingOrder([...filterMovies]);
      } else {
        return sortTitlesByDescendingOrder([...movieData]);
      }
    }
  }, [sortMoviesBy, filterMovies]);

  return sortResult;
}
