import React from "react";
import SearchResultComponent from "./SearchResultComponent";

function SearchResults() {
  return (
    <div>
      <div className='tv-layout'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='span12'>
              <div className='nav-row'>
                <a href='search.html'>
                  <div className='round-box back-arrow'>
                    <img
                      src='assets/images/icons/arrow-back.png'
                      alt='result-pic'
                    />
                  </div>
                </a>

                <a href='search.html'>
                  <div className='round-box close-icon'>
                    <img
                      src='assets/images/icons/close-icon.png'
                      alt='result-pic'
                    />
                  </div>
                </a>
              </div>

              <div className='tv-data-row'>
                <h1>Search Results</h1>

                <div className='col-12'>
                  <SearchResultComponent />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='cd-panel cd-panel--from-right js-cd-panel-main'>
          <div className='cd-panel__container'>
            <a href='#0' className='cd-panel__close js-cd-close'>
              X
            </a>
            <div className='cd-panel__content'>
              <div className='tv-slide-nav'>
                <ul>
                  <li>
                    <a href='login.html'>
                      <img
                        src='assets/images/icons/login-icon.png'
                        alt='result-page-pic'
                      />
                      Login
                    </a>
                  </li>

                  <li>
                    <a href='register.html'>
                      <img
                        src='assets/images/icons/register-icon.png'
                        alt='result-page-pic'
                      />
                      Registration
                    </a>
                  </li>

                  <li>
                    <a href='subscription.html'>
                      <img
                        src='assets/images/icons/subscrption-icon.png'
                        alt='result-page-pic'
                      />
                      Subscription
                    </a>
                  </li>

                  <li>
                    <a href='search.html'>
                      <img
                        src='assets/images/icons/search-icon.png'
                        alt='result-page-pic'
                      />
                      Search
                    </a>
                  </li>

                  <li>
                    <a href='categories.html'>
                      <img
                        src='assets/images/icons/categories-icon.png'
                        alt='result-page-pic'
                      />
                      Categories
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
