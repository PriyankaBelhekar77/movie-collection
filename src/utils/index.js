export const sortByID = (data) => {
  const sortResult = data.sort((prevVal, nextVal) => prevVal.episode_id - nextVal.episode_id);
  return sortResult;
};

export const sortByYear = (data) => {
  const sortResult = data.sort((prevVal, nextVal) => {
    const prevYear = new Date(prevVal.release_date);
    const nextYear = new Date(nextVal.release_date);
    return prevYear - nextYear;
  });
  return sortResult;
};

export const sortTitlesByAscendingOrder = (data) => {
  const sortResult = data.sort(function (a, b) {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA > titleB) {
      return 1;
    }
    if (titleA < titleB) {
      return -1;
    }
    return 0;
  });
  return sortResult;
};

export const sortTitlesByDescendingOrder = (data) => {
  const sortResult = data.sort(function (a, b) {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA > titleB) {
      return -1;
    }
    if (titleA < titleB) {
      return 1;
    }
    return 0;
  });
  return sortResult;
};
