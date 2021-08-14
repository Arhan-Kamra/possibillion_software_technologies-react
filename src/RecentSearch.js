import React from "react";

function RecentSearch({ name }) {
  return (
    <React.Fragment>
      <div className='seach-item'>
        <span>
          <img src='assets/images/icons/reload-icon.png' alt='pic' />
          {name}
        </span>
      </div>
    </React.Fragment>
  );
}

export default RecentSearch;
