import React from 'react'
import styled from "styled-components"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
  return (
    <Carousel {...settings}>
       <Wrap>
       <a href = "https://youtu.be/Ff82XtV78xo">
          <img src="/images/image slider.png" alt="" />
        </a>
      </Wrap>

      <Wrap>
       <a href = "https://youtu.be/7DmLkugdh9s">
          <img src="/images/image slider (1).png" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a href = "https://youtu.be/1P3ZgLOy-w8">
          <img src="/images/hope.png" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a href = "https://youtu.be/kNw8V_Fkw28">
          <img src="/images/image slider (2).png" alt="" />
        </a>
      </Wrap>
    </Carousel>
  )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 61px;
    margin-bottom: 50px;
 
    ul li button {
        &:before{
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before{
        color: white;
    }

    .slick-list{
        overflow: visible;
    }

    button{
        z-index: 1;
    }

`

const Wrap = styled.div`
cursor: pointer;

    img{
        border: 4px solid transparent:
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69% ) 0px 26px 30px -10px,
        rgb(0 0 0 / 73% ) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover{
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`
