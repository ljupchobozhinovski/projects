import Link from 'next/link';
import React from 'react';

const Banner = () => {

    const sponsors = [
        {
            link: "https://one-inside.com/",
            image: "../../images/inside.svg",
            alt: "inside"
        },
        {
            link: "https://www.symphony-solutions.eu/benefits-in-north-macedonia/",
            image: "../../images/symphony.svg",
            alt: "symphony"
        },
        {
            link: "https://www.allocatesoftware.com/",
            image: "../../images/allocate.svg",
            alt: "allocate"
        },
        {
            link: "https://www.triglav.mk/",
            image: "../../images/triglav.svg",
            alt: "triglav"
        },
        {
            link: "https://klimi.mk/",
            image: "../../images/klimimk.svg",
            alt: "klimi"
        },
        {
            link: "https://ffm.mk/",
            image: "../../images/ffm.svg",
            alt: "ffm"
        },
        {
            link: "https://www.endava.com/en",
            image: "../../images/endava.svg",
            alt: "endava"
        },
        {
            link: "http://kozuvcanka.mk/en/",
            image: "../../images/kozuvcanka.svg",
            alt: "kozuvcanka"
        },
        {
            link: "https://fx3x.com/",
            image: "../../images/fx3x.svg",
            alt: "fx3x"
        },
    ]

    return (
        <div className="container w-100 default-light-gray-color">
            <div className="d-flex align-items-center ">
                {sponsors.map((sponsor) => {
                    return (
                        <Link href={sponsor.link} target='_blank'>
                            <div className=''>
                                <img className='mx-auto default-light-gray-color swiper-img ' src={sponsor.image} alt={sponsor.alt} />
                            </div>
                        </Link>
                    )
                })}

            </div>
        </div >
    )
}

export default Banner