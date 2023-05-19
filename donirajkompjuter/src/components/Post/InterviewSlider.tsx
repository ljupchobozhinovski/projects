import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { NextPage } from "next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface Props {
    links: string[]
}

const InterviewSlider: NextPage<Props> = ({ links }) => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 1,
    };

    return (
        <div className='container-fluid interview-background'>
            <div className="container">
                <div className="row">
                    <h2 className="fs-1 py-5">Интервјуа</h2>
                    <div className="d-flex flex-column py-5">
                        <Slider {...settings}>
                            {links.map((link, index) => {
                                return (
                                    <div key={index}>
                                        <iframe width="400" height="200" src={link} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
                <div className="row">
                    <div className="col ">
                        <img className='w-75 imageAbsolute' src="../../images/blog/ourDonors.svg" alt="ourDonors" />
                        <h2 className='headingRelative'>Нашите донатори</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InterviewSlider