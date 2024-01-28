import React, { useState } from 'react'
import data from '../../Data.json'
import styles from "./Quiz.module.css"

export const Quiz = (props) => {
    const [selectedoptns, setSelectedoptns] = useState([])
    const [prevSelected, setPrevSelected] = useState([])
    const [score, setScore] = useState(0)
    const [viewScore, setViewScore] = useState(false)

    const selectoptn = (idx, optn) => {
        const newArray = [];
        for (let i = 0; i < selectedoptns.length; i++) {
            if (selectedoptns[i].id !== idx) {
                newArray.push(selectedoptns[i]);
            }
            else
                continue;
        }
        setSelectedoptns(newArray);
        setSelectedoptns([...newArray, {
            id: idx,
            option: optn
        }])
    }

    const submitoptns = () => {
        let currentScore = 0;
        for (let i = 0; i < selectedoptns.length; i++) {
            if (selectedoptns[i].option === data.data[props.subject].experiments[props.experiment].quiz[selectedoptns[i].id].correct)
                currentScore += 1;
        }
        setViewScore(true)
        setPrevSelected(selectedoptns)
        setScore(currentScore)
    }
    return (
        <div>
            {viewScore &&
                <div className={styles.score}>
                    {`Score:  ${score}/${data.data[props.subject].experiments[props.experiment].quiz.length}`}
                </div>
            }
            {data.data[props.subject].experiments[props.experiment].quiz.map((data, idx) => (
                <div key={idx} className={styles.quesno}>
                    <div className={styles.question}>
                        {`${idx + 1})   `}
                        {data.question}
                    </div>
                    <div className={styles.options}>
                        {data.options.map((optns, indx) => (
                            <div key={indx} className={styles.optns} onClick={() => selectoptn(idx, optns)}>
                                <input type="radio" id={optns} name={data.question} value={optns} />
                                <label htmlFor={optns}>
                                    {optns}
                                </label>
                                {viewScore && (prevSelected.find((item) => item.id === idx && item.option === optns)?.option === data.correct && prevSelected.find((item) => item.id === idx && item.option === optns) &&
                                    <img src="/Images/correct.png" alt="" />)
                                }
                                {viewScore && (prevSelected.find((item) => item.id === idx && item.option === optns)?.option !== data.correct && prevSelected.find((item) => item.id === idx && item.option === optns) &&
                                    <img src="/Images/wrong.png" alt="" />)
                                }
                                {viewScore && (optns === data.correct && !prevSelected.find((item) => item.id === idx && item.option === optns) &&
                                    <img src="/Images/correct.png" alt="" />)
                                }
                            </div>
                        ))}
                    </div>
                    <hr className={styles.linebreaker} />
                </div>
            ))}
            <button className={styles.submit} onClick={() => submitoptns()}>
                submit
            </button>
        </div>
    )
}
