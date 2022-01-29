import React, {FC, useState} from "react";
import QrReader from 'react-qr-reader';
import {toast} from "react-toastify";

interface ComponentProps {
    setValue: any
}

const QrScanner: FC<ComponentProps> = ({setValue}) => {
    const handleScan = (data: any) => {
        if (data) {
            setValue(data);
            console.log(data);
        }
    };
    const handleError = (err: any) => {
        toast.dark(err)
    };
    return (
        <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{width: '100%'}}
        />
    );
};

export default QrScanner