import React from "react";

function Key({ keyname, changeInput }) {
  return (
    <React.Fragment>
      <span
        onClick={e => {
          changeInput(e, keyname);
        }}
        className='key'
      >
        <button>{keyname}</button>
      </span>
    </React.Fragment>
  );
}

export default Key;
