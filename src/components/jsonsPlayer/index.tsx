import React, { FC } from "react";
import Lottie from 'react-lottie';

interface IjsonPlayer {
    loading: boolean,
    loop?: boolean,
    autoplay?: boolean,
    jsonName: "S2"|"barcode"|"biometric"|"calendar"|"check"|"clock"|"drag"|"earth"
    |"empty_box"|"exit"|"finger"|"happy"|"intro1"|"intro2"|"intro3"|"intro4"|"loading"
    | "loading2" | "location_pin" | "" | "" | "" | "",
    height?: number,
    width?:number
};

let S2: JSON = require('./jsons/S2.json');
let barcode: JSON = require('./jsons/barcode.json');
let biometric: JSON = require('./jsons/biometric.json');
let calendar: JSON = require('./jsons/calendar.json');
let check: JSON = require('./jsons/check.json');
let clock: JSON = require('./jsons/clock.json');
let drag: JSON = require('./jsons/drag.json');
let earth: JSON = require('./jsons/earth.json');
let empty_box: JSON = require('./jsons/empty_box.json');
let exit: JSON = require('./jsons/exit.json');
let finger: JSON = require('./jsons/finger.json');
let happy: JSON = require('./jsons/happy.json');
let intro1: JSON = require('./jsons/intro1.json');
let intro2: JSON = require('./jsons/intro2.json');
let intro3: JSON = require('./jsons/intro3.json');
let intro4: JSON = require('./jsons/intro4.json');
let loading1: JSON = require('./jsons/loading.json');
let loading2: JSON = require('./jsons/loading2.json');
let location_pin: JSON = require('./jsons/location_pin.json');


const JsonPlayer: FC<IjsonPlayer> = ({ loading, loop = true, autoplay = true, jsonName,height,width }) => {


    var AnimationData = S2;

    if (jsonName === "S2") AnimationData = S2;
    if (jsonName === "barcode") AnimationData = barcode;
    if (jsonName === "biometric") AnimationData = biometric;
    if (jsonName === "calendar") AnimationData = calendar;
    if (jsonName === "check") AnimationData = check;
    if (jsonName === "clock") AnimationData = clock;
    if (jsonName === "drag") AnimationData = drag;
    if (jsonName === "earth") AnimationData = earth;
    if (jsonName === "empty_box") AnimationData = empty_box;
    if (jsonName === "exit") AnimationData = exit;
    if (jsonName === "finger") AnimationData = finger;
    if (jsonName === "happy") AnimationData = happy;
    if (jsonName === "intro1") AnimationData = intro1;
    if (jsonName === "intro2") AnimationData = intro2;
    if (jsonName === "intro3") AnimationData = intro3;
    if (jsonName === "intro4") AnimationData = intro4;
    if (jsonName === "loading") AnimationData = loading1;
    if (jsonName === "loading2") AnimationData = loading2;
    if (jsonName === "location_pin") AnimationData = location_pin;



    const defaultOptions = {
        loop: loop,
        autoplay: autoplay,
        animationData: AnimationData,
        // rendererSettings: {
        //     preserveAspectRatio: 'xMidYMid slice'
        // }
    };

    return (
        <div style={{height:`${height}vh`,width:`${width}vw`}}>
            {loading && <Lottie options={defaultOptions} />}
        </div>
    );
}
export default JsonPlayer;