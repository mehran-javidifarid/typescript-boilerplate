import React, {FC, useEffect, useState} from "react";
import QrScanner from "./index";

const QrTestWrapper: FC = () => {
    const [code,setCode] = useState('');
    useEffect(() => {
        console.log(code)
    },[code]);
    return(
        <div>
            <p>code : {code}</p>
            <QrScanner setValue={setCode} />
        </div>
    )
};

export default QrTestWrapper