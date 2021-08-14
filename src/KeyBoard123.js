import Button from "./Buttons";
import Key from "./Key";
import React from "react";

function KeyBoard(props) {
  return (
    <React.Fragment>
      <div className='key-board-row'>
        <Key keyname='1' changeInput={props.changeInput} />
        <Key keyname='2' changeInput={props.changeInput} />
        <Key keyname='3' changeInput={props.changeInput} />
        <Key keyname='&' changeInput={props.changeInput} />
        <Key keyname='#' changeInput={props.changeInput} />
        <Key keyname='(' changeInput={props.changeInput} />
        <Key keyname=')' changeInput={props.changeInput} />
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
        <Key keyname='4' changeInput={props.changeInput} />
        <Key keyname='5' changeInput={props.changeInput} />
        <Key keyname='6' changeInput={props.changeInput} />
        <Key keyname='@' changeInput={props.changeInput} />
        <Key keyname='!' changeInput={props.changeInput} />
        <Key keyname='?' changeInput={props.changeInput} />
        <Key keyname=':' changeInput={props.changeInput} />

        <span className='arrow-change show-alpabets'>
          <button>& ABC</button>
        </span>
      </div>

      <div className='key-board-row'>
        <Key keyname='7' changeInput={props.changeInput} />
        <Key keyname='8' changeInput={props.changeInput} />
        <Key keyname='9' changeInput={props.changeInput} />
        <Key keyname='0' changeInput={props.changeInput} />
        <Key keyname='.' changeInput={props.changeInput} />
        <Key keyname='_' changeInput={props.changeInput} />
        <Key keyname='"' changeInput={props.changeInput} />
      </div>

      <div className='key-board-row'>
        <Button
          name='SPACE'
          className='space-clear'
          giveSpace={props.giveSpace}
        />
        <Button
          name='CLEAR'
          className='space-clear'
          clearInput={props.clearInput}
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

export default KeyBoard;
