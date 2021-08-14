import React from "react";

function Error404() {
  const headingStyle = {
    color: "#fff",
  };

  return (
    <React.Fragment>
      <h1 style={headingStyle}>
        The page you are looking do not exist. Have a look at something else
        through the search option provided below or try out this, this or this
      </h1>
      <label htmlFor='search'>
        <input type='search' id='search' />
      </label>
    </React.Fragment>
  );
}

export default Error404;
