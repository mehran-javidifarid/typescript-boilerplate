import React from "react";
import {ToastContainer} from 'react-toastify';

const Toast = () => {

    return (
        <ToastContainer
            rtl
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={true}
            closeOnClick={true}
            pauseOnHover={true}
            draggable={true}
            //progress={undefined}
        />
    )
};
export default Toast