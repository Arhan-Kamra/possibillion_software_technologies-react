import Button from "./Buttons";
import Key from "./Key";
import React from "react";

function KeyBoardABC(props) {
  return (
    <React.Fragment>
      <div className='key-board-row'>
        <Key keyname='A' changeInput={props.changeInput} />
        <Key keyname='B' changeInput={props.changeInput} />
        <Key keyname='C' changeInput={props.changeInput} />
        <Key keyname='D' changeInput={props.changeInput} />
        <Key keyname='E' changeInput={props.changeInput} />
        <Key keyname='F' changeInput={props.changeInput} />
        <Key keyname='G' changeInput={props.changeInput} />
        <span
          className='arrow-change'
          onClick={() => {
            props.backSpace();
          }}
        >
          <button>
            <img src='assets/images/icons/clear-icon.png' alt='pic' />
          </button>
        </span>
      </div>

      <div className='key-board-row'>
        <Key keyname='H' changeInput={props.changeInput} />
        <Key keyname='I' changeInput={props.changeInput} />
        <Key keyname='J' changeInput={props.changeInput} />
        <Key keyname='K' changeInput={props.changeInput} />
        <Key keyname='L' changeInput={props.changeInput} />
        <Key keyname='M' changeInput={props.changeInput} />
        <Key keyname='N' changeInput={props.changeInput} />
        <span className='arrow-change show-numbers'>
          <button>123</button>
        </span>
      </div>

      <div className='key-board-row'>
        <Key keyname='O' changeInput={props.changeInput} />
        <Key keyname='P' changeInput={props.changeInput} />
        <Key keyname='Q' changeInput={props.changeInput} />
        <Key keyname='R' changeInput={props.changeInput} />
        <Key keyname='S' changeInput={props.changeInput} />
        <Key keyname='T' changeInput={props.changeInput} />
        <Key keyname='U' changeInput={props.changeInput} />
      </div>

      <div className='key-board-row'>
        <Key keyname='V' changeInput={props.changeInput} />
        <Key keyname='W' changeInput={props.changeInput} />
        <Key keyname='X' changeInput={props.changeInput} />
        <Key keyname='Y' changeInput={props.changeInput} />
        <Key keyname='Z' changeInput={props.changeInput} />
        <Key keyname='-' changeInput={props.changeInput} />
        <Key keyname="'" changeInput={props.changeInput} />
      </div>

      <div className='key-board-row'>
        <Button
          name='SPACE'
          className='space-clear'
          giveSpace={props.giveSpace}
        />
        <Button
          name='CLEAR'
          clearInput={props.clearInput}
          className='space-clear'
        />
        <Button
          name='SEARCH'
          className='search-btn'
          changeUrl={props.changeUrl}
        />
      </div>
    </React.Fragment>
  );
}

export default KeyBoardABC;
