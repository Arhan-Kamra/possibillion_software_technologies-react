import React, { useEffect, useRef, useState } from "react";

import Image from "./Image";
import KeyBoard123 from "./KeyBoard123";
import KeyBoardABC from "./KeyBoardABC";
import RecentSearch from "./RecentSearch";
import { useHistory } from "react-router-dom";

function Container() {
  const inputRef = useRef();
  const [value, setValue] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function changeInput(e, keyname) {
    setValue(value + keyname);
    // inputRef.current.focus();
  }

  function clearInput() {
    setValue("");
  }

  function giveSpace(e) {
    /**
     ** COME BACK LATER TO THIS
     */
    // let indexPosition = value.indexOf(e.target.value);
    // value[indexPosition].push(3);
    setValue(value + " ");
  }

  let history = useHistory();

  function changeUrl() {
    history.push("/search-results");
  }

  function changeUrlOnEnter(e) {
    if (e.key === "Enter") {
      history.push("/search-results");
    }
  }

  function backSpace(e) {
    let val = value;
    let valu = val.split("");
    valu.pop();
    let newValue = valu.join("");
    setValue(newValue);
  }

  function setInput(value) {
    setValue(value);
    console.log(value);
  }

  function goBack(e) {
    e.preventDefault();
    history.goBack();
  }

  return (
    <div>
      <div className='tv-layout'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='span12'>
              <div className='nav-row'>
                <a
                  href='#'
                  onClick={e => {
                    goBack(e);
                  }}
                >
                  <div className='round-box back-arrow'>
                    <img src='assets/images/icons/arrow-back.png' alt='pic' />
                  </div>
                </a>

                <a
                  href='#'
                  onClick={e => {
                    goBack(e);
                  }}
                >
                  <div className='round-box close-icon'>
                    <img src='assets/images/icons/close-icon.png' alt='pic' />
                  </div>
                </a>
              </div>

              <div className='tv-data-row'>
                <div className='col-12'>
                  <div className='seach-box'>
                    <div className='input-group'>
                      <span className='input-search'>
                        <img
                          src='assets/images/icons/search-icon.png'
                          alt='pic'
                        />
                      </span>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Search for apple, book or anything literally...'
                        aria-label='Username'
                        aria-describedby='basic-addon1'
                        ref={inputRef}
                        value={value}
                        onChange={e => {
                          setInput(e.target.value);
                        }}
                        onKeyPress={e => {
                          changeUrlOnEnter(e);
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    {value === "" || value.trim() === "" ? null : (
                      <Image query={value} />
                    )}
                  </div>

                  <div className='search-block-iteams'>
                    <div className='recent-search'>
                      <h1>Recent Search Items</h1>

                      <RecentSearch name='Jathi Ratnalu Movie' />
                      <RecentSearch name='Kids English Telugu Dubbed Movies' />
                      <RecentSearch name='3D Animation Movies' />
                      <RecentSearch name='Action Movies in Telugu 2020' />
                    </div>

                    <div
                      className='key-board-box'
                      id='show-numbers'
                      style={{ display: "none" }}
                    >
                      <KeyBoard123
                        changeInput={changeInput}
                        changeUrl={changeUrl}
                        clearInput={clearInput}
                        giveSpace={giveSpace}
                        backSpace={backSpace}
                      />
                    </div>

                    <div className='key-board-box' id='show-alpabets'>
                      <KeyBoardABC
                        changeInput={changeInput}
                        changeUrl={changeUrl}
                        clearInput={clearInput}
                        giveSpace={giveSpace}
                        backSpace={backSpace}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
