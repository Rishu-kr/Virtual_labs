import React, { useState } from 'react'
import styles from "./Experiments.module.css"
import { useNavigate } from "react-router-dom"

export const Experiments = (props) => {

    if (props.exp) {
        var url = window.location.pathname;
        var id = url.substring(url.lastIndexOf('/') + 1);
    }

    const navigate = useNavigate()

    const [searchExp, setSearchExp] = useState("")

    const handleSearch = (e) => {
        var searchText = e.target.value.toLowerCase();
        setSearchExp(searchText);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    const subjects = [
        { subject: "Heat Transfer", desc: "Heat transfer is the physical process of transferring heat energy from one body or substance to another. It plays a crucial role in a wide range of applications, including energy systems, thermal management, and industrial processes." },
        { subject: "Mass Transfer", desc: "Mass transfer is the net movement of mass from one location to another. Mass transfer occurs in many processes, such as absorption, evaporation, drying, precipitation, membrane filtration, and distillation." },
        { subject: "Chemical Reaction Engineering", desc: "Chemical reaction engineering is a specialty in chemical engineering or industrial chemistry dealing with chemical reactors." },
        { subject: "Fluid Mechanics", desc: "Fluid mechanics is the study of fluid behavior (liquids, gases, blood, and plasmas) at rest and in motion. Fluid mechanics has a wide range of applications in mechanical and chemical engineering." },
        { subject: "Mechanical Operations", desc: "Understanding Properties and characterization of particulate solids and mechanical solidarity methods such as screening, filtration, sedimentation, transportation of solids, agitation etc and associated equipment used for achieving these methods. " },
        { subject: "Process Dynamics & Control", desc: "Process Dynamics and Control for Chemical Engineering focuses on the analysis, modeling, and control of dynamic process systems." }
    ]

    const experiments = [
        {
            subject: "Heat Transfer",
            content: [
                { exp: "Heat Transfer in Natural Convection", aim: "To study the heat transfer phenomenon in natural convection" },
                { exp: "Shell & Tube Heat Exchanger", aim: "To determine the rate of heat transfer,LMTD and overall heat transfer coefficient in shell and tube heat exchanger" },
            ]
        },
        {
            subject: "Mass Transfer",
            content: [
                { exp: "Heat Transfer in Natural Convection", aim: "To study the heat transfer phenomenon in natural convection" },
                { exp: "Shell & Tube Heat Exchanger", aim: "To determine the rate of heat transfer,LMTD and overall heat transfer coefficient in shell and tube heat exchanger" },
            ]
        },
        {
            subject: "Chemical Reaction Engineering",
            content: [
                { exp: "Heat Transfer in Natural Convection", aim: "To study the heat transfer phenomenon in natural convection" },
                { exp: "Shell & Tube Heat Exchanger", aim: "To determine the rate of heat transfer,LMTD and overall heat transfer coefficient in shell and tube heat exchanger" },
            ]
        },
        {
            subject: "Fluid Mechanics",
            content: [
                { exp: "Heat Transfer in Natural Convection", aim: "To study the heat transfer phenomenon in natural convection" },
                { exp: "Shell & Tube Heat Exchanger", aim: "To determine the rate of heat transfer,LMTD and overall heat transfer coefficient in shell and tube heat exchanger" },
            ]
        },
        {
            subject: "Mechanical Operations",
            content: [
                { exp: "Heat Transfer in Natural Convection", aim: "To study the heat transfer phenomenon in natural convection" },
                { exp: "Shell & Tube Heat Exchanger", aim: "To determine the rate of heat transfer,LMTD and overall heat transfer coefficient in shell and tube heat exchanger" },
            ]
        },
        {
            subject: "Process Dynamics & Control",
            content: [
                { exp: "Heat Transfer in Natural Convection", aim: "To study the heat transfer phenomenon in natural convection" },
                { exp: "Shell & Tube Heat Exchanger", aim: "To determine the rate of heat transfer,LMTD and overall heat transfer coefficient in shell and tube heat exchanger" },
            ]
        },
    ]

    const filterData = (!props.exp ? subjects : experiments[id].content).filter((el) => {
        if (searchExp === '')
            return (!props.exp ? subjects : experiments[id].content);
        else
            return (!props.exp ? el.subject : el.exp).toLowerCase().includes(searchExp);
    })

    const handleOpenSubject = (index) => {
        navigate(`/experiments/${index}`)
    }

    const handleOpenExp = (index) => {
        navigate(`/experiment/${id}/${index}`)
    }

    return (
        <div className={styles.subjects}>
            <div className={styles.header}>
                <div className={styles.heading}>
                    {!props.exp ? "Subjects" : `Experiments under ${experiments[id].subject}`}
                </div>
                <div className={styles.searchBox}>
                    <input type="text" value={searchExp} placeholder='search for a subject' className={styles.searchInput} onChange={handleSearch} onKeyDown={handleKeyDown} />
                    <img src="/images/search-icon.png" alt="search" />
                </div>
            </div>
            <div className={styles.allSubjects}>
                {(filterData)?.map((data, index) => (
                    <div key={index} className={styles.subCard} onClick={() => !props.exp ? handleOpenSubject(index) : handleOpenExp(index)}>
                        <div className={styles.heading}>
                            {!props.exp ? data.subject : data.exp}
                        </div>
                        <div className={styles.description}>
                            {!props.exp ? data.desc : data.aim}
                        </div>
                        <div className={styles.progress}>
                            <div className={styles.progressBox}>
                                83%
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
