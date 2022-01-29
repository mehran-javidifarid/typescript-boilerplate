import React, {FC} from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";

interface ComponentProps {
    setValue: any
    width: any
    height: any
}

const BarcodeScanner: FC<ComponentProps> = ({setValue, width, height}) => {
    const handleScan = (data: any, err: any) => {
        if (data) {
            setValue(data.text);
        }
    };

    return (
        <BarcodeScannerComponent
            width={width}
            height={height}
            onUpdate={(err, result) => handleScan(result, err)}
        />
    );
};

export default BarcodeScanner
