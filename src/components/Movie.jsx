import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";

function Movie({ movieData }) {
  useEffect(() => {
    console.log(movieData);
  }, [movieData]);

  return (
    <>
      {movieData.length ? (
        <Table>
          <tbody>
            {movieData.map((movie) => {
              return (
                <tr key={movie.episode_id}>
                  <td>{`EPISODE ${movie.episode_id}`}</td>
                  <td>{movie.title}</td>
                  <td>{movie.release_date}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : null}
    </>
  );
}

export default React.memo(Movie);
