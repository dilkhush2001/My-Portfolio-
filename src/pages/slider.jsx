import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/recomendations.css';

import Slidercomponent from "./slidercomponent";


function Responsive() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [Cards, setCards] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:3000/Recommendations')
      .then(response => {
          console.log(response.data);
          setCards(response.data);
      })
      .catch(error => {
          console.log(error);
      });
  }, []);


  return (
    <div className="slider-container sliderwidth">
      <Slider {...settings}>
        {
          Cards.map((item) => {
            return(
              <Slidercomponent sliderdata={item}/>
            )
          })
        }
      </Slider>
    </div>
  );
}

export default Responsive;