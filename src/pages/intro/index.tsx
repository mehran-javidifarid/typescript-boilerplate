import React, {FC} from 'react';
import {useHistory} from "react-router-dom";
import {makeStyles} from "@mui/styles";

const Intro: FC = () => {
  const history = useHistory();
  const classes = useStyle()
  {
    setTimeout(() => {
      history.push('/login');
    }, 2000)
  }

  return (
    <div className={classes.wrapper}>
      <p className={classes.text}>
        intro
      </p>
    </div>
  );
}

export default Intro;

const useStyle = makeStyles({
  wrapper: {
    height: '100vh',
    width: '100%',
  },
  text: {
    lineHeight: '100vh',
    textAlign: 'center',
    margin: '0 auto',
    fontSize: '50px'
  }
})
