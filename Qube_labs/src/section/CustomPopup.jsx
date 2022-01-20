import React from "react";
import { Animated } from "react-animated-css";
const Popup = (props) => {
  return (
    <div className="popup-box flex items-center justify-center bg-slate-200 bg-opacity-60 backdrop-blur-sm">
      <Animated animationIn="flipInX" animationOut="flipOutY" isVisible={true}>
        <div className="box modal-skew-from-left border-black-100">
          <span className="close-icon pt-3" onClick={props.handleClose}>
            {/* <i class="fa fa-times"></i> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 21 21">
              <path
                id="Icon_material-close"
                data-name="Icon material-close"
                d="M28.5,9.615,26.385,7.5,18,15.885,9.615,7.5,7.5,9.615,15.885,18,7.5,26.385,9.615,28.5,18,20.115,26.385,28.5,28.5,26.385,20.115,18Z"
                transform="translate(-7.5 -7.5)"
                fill="#1092b2"
              />
            </svg>
          </span>
          {props.content}
        </div>
      </Animated>
    </div>
  );
};

export default Popup;
