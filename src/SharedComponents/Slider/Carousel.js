import React, { useState, useEffect } from 'react'
import style from './Carousel.module.css'
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export const Carousel = () => {

    const delay = 2500;

    const [imgIndex, setImgIndex] = useState(0);

    const handleForward = () => {
        if (imgIndex === 3) {
            return setImgIndex(0);
        }
        setImgIndex(imgIndex + 1);
    }

    const handleBack = () => {
        if (imgIndex === 0) {
            return setImgIndex(3);
        }
        setImgIndex(imgIndex - 1);
    }

    let imageArr = [{
        id: 0,
        imgClass: style.imageIntro,
    },
    {
        id: 1,
        imgClass: style.imageEdu,
    },
    {
        id: 2,
        imgClass: style.imageRail,
    },
    {
        id: 3,
        imgClass: style.imageCong,
    }];

    useEffect(() => {
        setTimeout(() =>
            setImgIndex((prevIndex) =>
                imgIndex === 3 ? 0 : prevIndex + 1
            )
            , delay);

        return () => { }
    }, [imgIndex])


    return (
        <div className={`${style.carousel__body} ${imageArr[imgIndex].imgClass}`}>
            <div className={style.buttons}>
                <IconButton onClick={() => handleBack()}>
                    <ArrowBackIosIcon style={{ color: 'white', fontSize: "35px", marginRight: "-50px" }} />
                </IconButton>
                <hr className={style.breaker}></hr>
                <IconButton onClick={() => handleForward()}>
                    <ArrowForwardIosIcon style={{ color: 'white', fontSize: "35px", marginLeft: "-35px" }} />
                </IconButton>
            </div>
        </div>
    )
}
