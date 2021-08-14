import React, { useEffect, useState } from "react";

import Item from "./Item";

function SearchResultComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("./moviesInfo.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        setError(error);
        console.warn(`Error fetching error :${error}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error!</h1>;
  return (
    <React.Fragment>
      <div className='search-results'>
        {data.map((movie, index) => {
          return (
            <Item
              key={index}
              link='#'
              src={`assets/images/${movie.genre}/Thumbnails/${movie.path}-thumb.jpg`}
              alt='result-page-pic'
              className='movie-name'
              name={`${movie.name}`}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default SearchResultComponent;
