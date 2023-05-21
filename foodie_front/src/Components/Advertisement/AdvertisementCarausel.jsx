import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import config from "../../config";

const AdvertisementCarousel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.baseUrl}/advertisements`)
      .then((value) => {
        setData(value.data);
      })
      .catch((err) => {
        console.log("get advertisements failed " + err);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 1500, // Set the duration between slides (in milliseconds)
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      style={{
        width: "100vw", // Set the width to full viewport width
        height: "250px", // Set the height to full viewport height
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Slider
        style={{
          width: "100%",
          height: "250px",
        }}
        {...settings}
      >
        {data &&
          data.map((ad) => {
            return (
              <div
                key={ad._id}
                style={{
                  width: "100%", // Set the width to full width
                  height: "250px", // Set the height to full height
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  console.log(ad);
                  window.location.href = ad.visitLink;
                }}
              >
                <img
                  src={ad.imageUrl}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  alt="Advertisement"
                />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default AdvertisementCarousel;
