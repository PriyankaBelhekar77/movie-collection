export const getFilmsData = async () => {
  let data = [];
  try {
    const response = await fetch('https://swapi.dev/api/films/?format=json');
    const json = await response.json();
    data = json.results;
  } catch (e) {
    data = { error: true, message: 'Failed to fetch data', errorObj: e };
  }
  return data;
};
