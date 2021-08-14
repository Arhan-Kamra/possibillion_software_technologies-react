import React, { useRef } from "react";

function Item(props) {
  const ref = useRef();
  const refp = useRef();

  function defaultSrc() {
    ref.current.src = `assets/images/default/Thumbnails/default-movie-image-thumb.jpg`;
    refp.current.innerHTML = "no image fetched";
  }

  return (
    <React.Fragment>
      <div className='item'>
        <a href={props.link}>
          <img
            ref={ref}
            onError={() => {
              console.log("image was not fetched");
              defaultSrc();
            }}
            src={props.src}
            alt={props.alt}
          />
          <p ref={refp} className={props.className}>
            {props.name}
          </p>
        </a>
      </div>
    </React.Fragment>
  );
}

export default Item;
