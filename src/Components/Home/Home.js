import React from 'react'
import styles from "./Home.module.css"
// import { Carousel } from '../../SharedComponents/Slider/Carousel'

export const Home = () => {

    const images = [
        { url: "/Images/img1.png", desc: "Risk Free Experience and Reduced Statistical Error" },
        { url: "/Images/img2.png", desc: "Interactive Simulations" },
        { url: "/Images/img3.png", desc: "Proffesional Dashboard and Real time feedback" },
        { url: "/Images/img4.png", desc: "3-D Animations with high Quality Visualisation" }
    ]

    return (
        <div className={styles.home}>
            {/* <div className={styles.slider}>
                <Carousel />
            </div> */}
            <div className={styles.offer}>
                <div className={styles.headOffer}>
                    Delivering chemical laboratory experience on screen
                </div>
                <div className={styles.features}>
                    {images.map((data,idx) => (
                        <div key={idx} className={styles.feature}>
                            <img src={data.url} alt="" />
                            <div className={styles.description}>
                                {data.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
