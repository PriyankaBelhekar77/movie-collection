export const sortByID = (data) => {
  const sortResult = data.sort(
    (prevVal, nextVal) => prevVal.episode_id - nextVal.episode_id
  );
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
