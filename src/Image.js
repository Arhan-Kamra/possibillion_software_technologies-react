import React from "react";

function Image({ query }) {
  return (
    <React.Fragment>
      <img
        src={`https://source.unsplash.com/400x300/?${query}`}
        alt='water park'
        width='400'
        height='300'
      />
    </React.Fragment>
  );
}

export default Image;
