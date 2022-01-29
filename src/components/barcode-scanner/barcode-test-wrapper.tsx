import React, {FC, useEffect, useState} from "react";
import BarcodeScanner from "./index";

const BarcodeTestWrapper: FC = () => {
    const [code,setCode] = useState('');

    return(
        <div>
            <p>code : {code}</p>
            <BarcodeScanner setValue={setCode} height={'100%'} width={'100%'}/>
        </div>
    )
};

export default BarcodeTestWrapper