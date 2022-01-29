import React, {FC} from 'react';
import {ToastContainer} from "react-toastify";

const PublicLayout: FC = ({children}) => {

  return (
    <div>
      <ToastContainer/>
      {children}
    </div>
  );
}


export default PublicLayout;
