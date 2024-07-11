import React from "react";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./apartments.css";

export default function Apartments(props) {
  const settings = {
    className: "mySlider",
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="section_apartments" id="apartments">
      <div className="card">
        <div>
          <div className="card--image-container">
            <Slider {...settings}>
              {Array.isArray(props.coverImg) &&
                props.coverImg.map((image, imgIndex) => (
                  <LazyLoadImage
                    key={imgIndex}
                    src={`/../assets/${image}`}
                    alt={`Image ${imgIndex + 1}`}
                    effect="blur"
                    className="card--image"
                  />
                ))}
            </Slider>
          </div>
          <div className="card--info">
            <div className="card--stats"></div>
            <a className="card--title">{props.title}</a>
            <p className="gray">{props.description}</p>
            <a
              className="anch_apartments"
              href={props.moreInfoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
