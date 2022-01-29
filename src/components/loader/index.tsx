import React, {useState, FC} from 'react';
import Lottie from 'react-lottie';

let watchAnimationData2 = require('../jsonsPlayer/jsons/loading.json');

const Loader: FC<{ loading: boolean }> = ({loading, children}) => {

  const [animationData] = useState(watchAnimationData2);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      {loading ?
        <div className="spinner">
          <div className="overlay">
            <div className="overlay__content">
              <Lottie options={defaultOptions}/>
            </div>
          </div>
        </div> : children}
    </div>

  );
};

export default Loader;
