import React from 'react';
import LineChart from './LineChart.js';
import Card from './Card.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HorizontalCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        adaptiveHeight: true,
    };

    return (
        <div className="container mx-auto p-4">
            <Slider {...settings}>
                <div className="flex justify-center items-center h-auto">
                    <LineChart />
                </div>
                <div className="flex justify-center items-center h-auto">
                    <Card />
                </div>
                {/* Adicione mais cards conforme necessário */}
            </Slider>
        </div>
    );
};

export default HorizontalCarousel;