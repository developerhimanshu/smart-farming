import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Products from "../components/Products";
import i1 from "../Images/1.jpg";
import i2 from "../Images/2.jpg";
import i3 from "../Images/3.jpg";
import i4 from "../Images/4.jpg";
import t1 from "../Images/t1.png";
import t2 from "../Images/t2.png";
import t3 from "../Images/t3.png";
import t4 from "../Images/t4.png";
import { productsData } from "../products";

export default function Home() {
  function prods() {
    return productsData.map((obj) => {
      return (
        <div className="product">
          <img
            src={obj.pimg}
            alt=""
            style={{
              width: "90%",
              height: "60%",
            }}
          />
          <h2>{obj.pname}</h2>
          <a href={obj.link} target="_blank">
            <button>Buy</button>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="home">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showThumbs={false}
        interval={3000}
        className="carousel"
      >
        <div>
          <img src={i1} alt="" id="carouselImg" />
        </div>
        <div>
          <img src={i2} alt="" id="carouselImg" />
        </div>
        <div>
          <img src={i3} alt="" id="carouselImg" />
        </div>
        <div>
          <img src={i4} alt="" id="carouselImg" />
        </div>
      </Carousel>

      <div className="news">
        <div>
          <h1>Agricultural News</h1>
          <div className="news-items">
            <ul>
              <li>
                Accelerator fund will drive agriculture towards innovation,
                optimisation of resources
              </li>
              <li>
                Agritech industry celebrates as Union Budget 2023 invests in
                agriculture
              </li>
              <li>
                Bayer holds meet to create awareness about crop damaging
                nematodes among farmers, stakeholders
              </li>
              <li>
                Budget 2023: PM-VIKAS, Unity Mall to accelerate growth of agri
                produce GI in India, say experts
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="partner-group">
        <div>
          <h1>Our Partners</h1>
          <div className="partners">
            <div style={{ animationDelay: "0.2s" }}>
              <img src={t1} alt="" />
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <img src={t2} alt="" />
            </div>
            <div style={{ animationDelay: "0.8s" }}>
              <img src={t3} alt="" />
            </div>
            <div style={{ animationDelay: "1.1s" }}>
              <img src={t4} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="prd">
          <h1 style={{ borderBottom: "3px solid black" }}>Products</h1>
        </div>
        <div>{prods()}</div>
      </div>
    </div>
  );
}
