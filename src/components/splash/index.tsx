import React, {useState, FC, useEffect} from 'react';
import Lottie from 'react-lottie';
import {useHistory} from "react-router-dom";
import {makeStyles} from "@mui/styles";

let watchAnimationData = require('./splash.json')

interface spinnerType {
  isFirst?: boolean
}

const Spinner: FC<spinnerType> = (isFirst) => {
  const classes = useStyle()
  const [animationData] = useState(watchAnimationData);
  const history = useHistory();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(() => {
    if (history)
      if (isFirst) {
        setTimeout(() => {
          history.push('/intro');
        }, 5000);
      } else {
        setTimeout(() => {
          history.push('/intro');
        }, 5000);
      }
  }, [history]);

  return (
    <div>
      <div>
        <div className="spinner">
          <div className="overlay">
            <div className={classes.wrapper}>
              <Lottie options={defaultOptions}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Spinner;

const useStyle = makeStyles({
  wrapper: {
    width:'100vw',
    height:'100vh'
  }
})
