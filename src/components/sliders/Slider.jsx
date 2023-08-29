import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';


const SliderCat = ({children}) => {

  const sliderRef = useRef(null);

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Добавляем свойство autoplay: true
    autoplaySpeed: 3000, // Устанавливаем интервал автопрокрутки в миллисекундах
  };

  useEffect(() => {
    // При монтировании компонента запускаем автопрокрутку слайдера
    sliderRef.current.slickPlay();
  }, []);


  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </div>
  );
}

export default SliderCat;
