import React, { useState } from "react";
import useMightyMouse from "react-hook-mighty-mouse";

import { EyesContainer } from './styles'

export default function Eyes() {
  // const [tiredness, setTiredness] = useState(0);
  const {
    positionRelative: { angle: angleLeftEye }
  } = useMightyMouse(true, "left-eye", { x: 45, y: 45 });
  const {
    positionRelative: { angle: angleRightEye }
  } = useMightyMouse(true, "right-eye", { x: 45, y: 45 });

  const redEye =
    (angleLeftEye < 30 || (angleLeftEye < 360 && angleLeftEye > 330)) &&
    (angleRightEye > 150 && angleRightEye < 210);
  const styleLeftEye = {
    transform: `rotate(${-angleLeftEye}deg)`,
    backgroundColor: redEye ? "#f8c6c6" : "#f3efef",
    transition: `all ${tiredness}s ease`
  };
  const styleRightEye = {
    transform: `rotate(${-angleRightEye}deg)`,
    backgroundColor: redEye ? "#f8c6c6" : "#f3efef",
    transition: `all ${tiredness}s ease`
  };

  return (
    <Eyes>
      <div className="container">
        <div className="eyelid" />
        <div className="eyes">
          <div id="left-eye" className="eye" style={styleLeftEye}>
            <div className="pupil" />
          </div>
          <div id="right-eye" className="eye" style={styleRightEye}>
            <div className="pupil" />
          </div>
        </div>
      </div>
    </Eyes>
  );
}
