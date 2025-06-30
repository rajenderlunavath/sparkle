import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // Array of images (replace with your actual image paths)
  const images = [
    { src: "img/img1.png", alt: "image1" },
    { src: "img/img2.png", alt: "image2" },
    { src: "img/img3.png", alt: "image3" },
    { src: "img/img4.png", alt: "image4" },
  ];

  return (
    <>
      <Helmet>
        <title>SLIDER | E-COMMERCE WEBSITE</title>
        <link
          rel="icon"
          href="https://yt3.ggpht.com/a/AGF-l78km1YyNXmF0r3-0CycCA0HLA_i6zYn_8NZEg=s900-c-k-c0xffffffff-no-rj-mo"
          type="image/gif"
          sizes="16x16"
        />
      </Helmet>

      <section style={{ margin: 0 }}>
        <div
          id="containerSlider"
          style={{
            margin: "auto",
            width: "90%",
            textAlign: "center",
            paddingTop: "100px",
            boxSizing: "border-box",
          }}
        >
          <Slider {...settings}>
            {images.map((img) => (
              <div key={img.alt}>
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "140%",
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

// If you use react-helmet for title and favicon, don't forget to import it:
import { Helmet } from "react-helmet";

export default SliderComponent;
