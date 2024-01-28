import React, { useState, useEffect } from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from './Game.module.css';
import { ncd } from '../../http/Http';

export const Game = () => {

    const { unityProvider, loadingProgression, isLoaded, sendMessage, requestFullscreen } = useUnityContext({
        loaderUrl: "/Natural_Convection/Build/Natural_Convection.loader.js",
        dataUrl: "/Natural_Convection/Build/Natural_Convection.data",
        frameworkUrl: "/Natural_Convection/Build/Natural_Convection.framework.js",
        codeUrl: "/Natural_Convection/Build/Natural_Convection.wasm",
    });

    useEffect(() => {
        const A = document.querySelector('.Abubble');
        if (A) {
            A.style.left = `${Number(ammeter / 5)}px`;
        }
        const V = document.querySelector('.Vbubble');
        if (V) {
            V.style.left = `${Number(voltmeter / 5)}px`;
        }
        const T = document.querySelector('.Tbubble');
        if (T) {
            T.style.left = `${Number(roomTemp / 4)}px`;
        }
    })

    const [ammeter, setAmmeter] = useState(0)
    const [voltmeter, setVoltmeter] = useState(0)
    const [roomTemp, setRoomTemp] = useState(28)

    const getAmmeterReading = (value) => {
        sendMessage('Needle', 'AmReading', value);
        // sendMessage('Pipe', 'ChnagePipeDiameter', value * 10);
    }

    const changeAmmeterValue = (e) => {
        setAmmeter(e.target.value);
        console.log(e.target.value);
        if (e.target.value === '0')
            setVoltmeter(0);
        else
            setVoltmeter(Math.round(153.33 * e.target.value - 2.93));
        getAmmeterReading(e.target.value);
    }

    const changeVoltmeterValue = (e) => {
        setVoltmeter(e.target.value);
        setAmmeter(Math.round((e.target.value / 153.33 + 0.019) * 10) / 10);
    }

    const changeRTempValue = (e) => {
        setRoomTemp(e.target.value);
    }

    const EnterFullscreen = () => {
        requestFullscreen(true);
    }

    const EnterGame = () => {
        sendMessage('LevelLoader', 'LoadNextLevel');
        requestFullscreen(true);
    }

    const GetResults = async () => {
        try {
            const ncdata = await ncd({ current: ammeter })
            console.log(JSON.parse(ncdata.data[0])[0])
            console.log(ncdata.data[1])
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.game}>
            <div className={styles.data}>
                <div className={styles.dataIntake}>
                    <div className={styles.heading}>
                        <div className={styles.Head}>Data Input</div>
                        <hr className={styles.border} />
                    </div>
                    <div className={styles.inputData}>
                        <div className={styles.slider}>
                            <div className={styles.Abubble}>
                                Current Input: {ammeter} A
                            </div>
                            <input type="range" min="0" max="1" step="0.1"
                                value={ammeter}
                                onChange={(e) => changeAmmeterValue(e)} />
                        </div>
                        <div className={styles.slider}>
                            <div className={styles.Vbubble}>
                                Voltage Input: {voltmeter} V
                            </div>
                            <input type="range" min="0" max="150" step="1"
                                value={voltmeter}
                                onChange={(e) => changeVoltmeterValue(e)} />
                        </div>
                        <div className={styles.slider}>
                            <div className={styles.Tbubble}>
                                Room Temperature: {roomTemp} ℃
                            </div>
                            <input type="range" min="28" max="32" step="1"
                                value={roomTemp}
                                onChange={(e) => changeRTempValue(e)} />
                        </div>
                    </div>
                </div>
                <div className={styles.btn} onClick={EnterGame}>
                    Start Machine
                </div>
                {/* <div className={styles.btn} onClick={GetResults}>
                    Get Results
                </div> */}
            </div>
            <div className={styles.gameView}>
                <div className={styles.gameV}>
                    {
                        !isLoaded &&
                        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
                    }
                    <Unity
                        unityProvider={unityProvider}
                        style={{ visibility: isLoaded ? "visible" : "hidden", width: '100%', height: '100%' }}
                    />
                    {isLoaded && <div className={styles.FullScreen} onClick={EnterFullscreen}>
                        Enter Fullscreen mode
                    </div>}
                </div>
                <div className={styles.instructions}>
                    <div className={styles.InsHead}>
                        Guidelines for Conducting a Virtual Experiment....
                    </div>
                    <ul>
                        <li>The game allows you to navigate using both the arrow keys and the keys 'A', 'S', 'D', and 'W'.</li>
                        <li>To view the game in full screen mode, click on the button located below the game interface.</li>
                        <li>Before beginning the experiment, enter the required inputs into the system and then initiate the machine by clicking on the 'Start Machine' button located on the left.</li>
                        <li>Once in Game Mode, activate the machine by flipping the switch to the 'On' position. The system will begin to receive air flow immediately upon powering on the machine.</li>
                        <li>The temperature readings will be displayed in the readings panel during gameplay and will be recorded for data collection purposes in the subsequent experiment.</li>
                    </ul>
                    <div className={styles.InsHead}>
                        Please Remember....
                    </div>
                    <ul>
                        <li>Please refrain from pressing any buttons within the game until the 'Start Machine' button has been clicked. Your data will not be saved until the machine has been initiated.</li>
                        <li>In the event that no inputs are provided, default inputs will be utilized for the experiment.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
