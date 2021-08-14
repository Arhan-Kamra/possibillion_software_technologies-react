import React from "react";

function Button({ name, className, changeUrl, clearInput, giveSpace }) {
  return (
    <React.Fragment>
      <span className={className}>
        {name === "SEARCH" ? (
          <button onClick={changeUrl}>{name}</button>
        ) : name === "SPACE" ? (
          <button
            onClick={e => {
              giveSpace(e);
            }}
          >
            {name}
          </button>
        ) : (
          <button onClick={clearInput}>{name}</button>
        )}
      </span>
    </React.Fragment>
  );
}

export default Button;
