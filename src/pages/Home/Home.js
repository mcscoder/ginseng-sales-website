import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./Home.module.scss";
import Carousel from "components/Carousel/Carousel";
import {
  adsBannerContent,
  verticalBannerContent,
  squareBannerContent,
  spotProduct,
  ecommerceContent,
  advantagesContent,
} from "./config/homeContent";
import { useMemo } from "react";
import HomeProduct from "./components/HomeProduct/HomeProduct";

const cx = classNames.bind(style);

function Home() {
  const slidesPerView = useMemo(() => {
    return window.innerWidth <= 1024 ? 1 : 2;
  }, []);

  return (
    <div className={cx("content-area")}>
      <div className={cx("banner-container")}>
        <div className={cx("banner-img")}></div>
      </div>

      <div className={cx("product-content-wrapper")}>
        <div className={cx("ads-container")}>
          <div className={cx("ads-content")}>
            <Carousel
              slidesPerView={slidesPerView}
              loop={false}
              pagination={false}
            >
              {adsBannerContent.map((item, index) => (
                <div key={index} className={cx("ads-img")}>
                  <img src={item.bgPath} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className={cx("product-banner")}>
          {verticalBannerContent.map((item, index) => {
            return (
              <div key={index} className={cx("flex-col")}>
                <div className={cx("vertical-banner")}>
                  <NavLink className={cx("banner-link")}>
                    <div className={cx("link-text-container")}>
                      <h1>{item.h1}</h1>
                      <h2>{item.h2}</h2>
                      <ul>
                        {item.ul.map((ulItem, ulIndex) => {
                          return <li key={ulIndex}>{ulItem.li}</li>;
                        })}
                      </ul>
                    </div>
                  </NavLink>
                  <div
                    className={cx("banner-bg")}
                    style={{ backgroundImage: `url(${item.bgPath})` }}
                  ></div>
                </div>
              </div>
            );
          })}

          <div className={cx("flex-col")}>
            <div className={cx("vertical-banner")}>
              {squareBannerContent.map((item, index) => {
                return (
                  <div key={index} className={cx("square-banner")}>
                    <NavLink className={cx("banner-link")}>
                      <div className={cx("link-text-container")}>
                        <h1>{item.h1}</h1>
                        <h2>{item.h2}</h2>
                      </div>
                    </NavLink>
                    <div
                      className={cx("banner-bg")}
                      style={{ backgroundImage: `url(${item.bgPath})` }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <HomeProduct />

        <div className={cx("spot-product")}>
          <div className={cx("product-image")}>
            <Carousel>
              <div className={cx("slide-item")}>
                <img
                  src={require("assets/images/product/nightwolf245-thung.png")}
                />
              </div>
              <div className={cx("slide-item")}>
                <img
                  src={require("assets/images/product/nightwolfcf-thung.png")}
                />
              </div>
            </Carousel>
          </div>

          <div className={cx("product-information")}>
            <div className={cx("product-name")}>
              <h1>{spotProduct.productName}</h1>
            </div>
            <div className={cx("product-description")}>
              <ul>
                {spotProduct.productDescription.map((item, index) => {
                  return <li key={index}>{item.information}</li>;
                })}
              </ul>
            </div>

            <div className={cx("other-information")}>
              {spotProduct.otherInformation.map((item, index) => {
                return (
                  <div key={index} className={cx("flex-col")}>
                    <div className={cx("title")}>
                      <span>{item.title}</span>
                    </div>
                    <div className={cx("content", { price: item.price })}>
                      <span>{item.content}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={cx("product-link-btn")}>
              <NavLink
                to={spotProduct.productLink.endPoint}
                className={cx("spot-product-link")}
              >
                {spotProduct.productLink.title}
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className={cx("ecommerce-partner-section")}>
        <div className={cx("ecommerce-partner-content-wrapper")}>
          <div className={cx("title")}>
            <h1>đối tác thương mại điện tử</h1>
          </div>
          <div className={cx("partners-logo-container")}>
            {ecommerceContent.logos.map((item, index) => {
              return (
                <div key={index} className={cx("partner-logo")}>
                  <img src={item.bgPath} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={cx("advantages-section")}>
        <div className={cx("advantages-content-wrapper")}>
          {advantagesContent.map((item, index) => {
            return (
              <div key={index} className={cx("advantages-content")}>
                <div className={cx("image-content")}>
                  <img src={item.bgPath} />
                </div>
                <div className={cx("text-content")}>
                  <h3>{item.title}</h3>
                  <span>{item.desciprtion}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
