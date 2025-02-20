"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
// IMAGES DATA FOR CAROUSEL
interface Data {
    id: number;
    imgSrc: string;
}

const data: Data[] = [
    {
        id: 1,
        imgSrc: "/images/Companies/birdseye.svg"
    },
    {
        id: 2,
        imgSrc: "/images/Companies/break.svg"
    },
    {
        id: 3,
        imgSrc: "/images/Companies/keddar.svg"
    },
    {
        id: 4,
        imgSrc: "/images/Companies/shield.svg"
    },
    {
        id: 5,
        imgSrc: "/images/Companies/tandov.svg"
    },
    {
        id: 6,
        imgSrc: "/images/Companies/tree.svg"
    },
]


// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (

            <div className='text-center bg-lightpink' >
                <div className="mx-auto max-w-2xl py-16 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
                    <div>
                        <Slider {...settings}>
                            {data.map((item) =>
                                <div key={item.id}>
                                    <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} />
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>

        )
    }
}
