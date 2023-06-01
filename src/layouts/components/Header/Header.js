import { NavLink } from "react-router-dom";
import { useState } from "react";
import classNames from "classnames/bind";
import style from "./Header.module.scss";
import NavSidebar from "./NavSidebar/NavSidebar";
import MobileSearch from "./MobileSearch/MobileSearch";
import CartSidebar from "./CartSidebar/CartSidebar";
import layouts from "./config/layouts";

const cx = classNames.bind(style);

function Header() {
  console.log("Header re-render");
  const [displayedLayout, setDisplayedLayout] = useState(0);
  // true: remove fade-out animation; - false: add fade-out animation;
  const [displayPopupBg, setDisplayPopupBg] = useState(false);
  // true: display: block; - false: display: none;

  function handleDisplayedLayout(id) {
    setDisplayedLayout(id);
    if (displayPopupBg === false) {
      setDisplayPopupBg(true);
    }
  }

  function handlePopupBg() {
    // Only apply the "display: none" property on the close action
    if (displayedLayout === 0) {
      setDisplayPopupBg(!displayPopupBg);
    }
  }

  return (
    <>
      <div
        className={cx(
          "popup-bg",
          displayedLayout === 0 ? "fade-out" : "fade-in"
        )}
        onAnimationEnd={handlePopupBg}
        style={displayPopupBg === false ? { display: "none" } : {}}
      >
        <div onClick={() => handleDisplayedLayout(0)}>
          <button
            style={
              displayedLayout === layouts.mobile_search
                ? { display: "flex" }
                : {}
            }
          >
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <NavSidebar
        layout={displayedLayout}
        closeNavSidebar={() => handleDisplayedLayout(0)}
      />
      <MobileSearch layout={displayedLayout} />
      <CartSidebar
        layout={displayedLayout}
        closeNavSidebar={() => handleDisplayedLayout(0)}
      />

      <header className={cx("mobile-header")}>
        <div className={cx("mobile-header-content")}>
          <div className={cx("mobile-header-right-content")}>
            {/* Show nav sidebar btn */}
            <button
              className={cx("show-navbar-btn", "mobile-header-btn")}
              onClick={() => handleDisplayedLayout(layouts.nav_sidebar)}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <div className={cx("logo-container")}>
            <NavLink to={"/"}>
              <div className={cx("logo")}></div>
            </NavLink>
          </div>
          <div className={cx("mobile-header-left-content")}>
            <button
              className={cx("mobile-header-search-btn", "mobile-header-btn")}
              onClick={() => handleDisplayedLayout(layouts.mobile_search)}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            <div className={cx("separator")}></div>

            <button
              className={cx("mobile-cart-shopping-btn", "mobile-header-btn")}
              onClick={() => handleDisplayedLayout(layouts.cart_sidebar)}
            >
              <i className="fa-solid fa-bag-shopping"></i>
            </button>
          </div>
        </div>
      </header>

      <header className={cx("main-header")}>
        <div className={cx("top-header-container")}>
          <div className={cx("top-header-content")}>
            <div className={cx("logo-container")}>
              <NavLink to={"/"}>
                <div className={cx("logo")}></div>
              </NavLink>
            </div>

            <form className={cx("header-search")}>
              <input
                type="text"
                className={cx("header-search-input")}
                placeholder="Tìm kiếm..."
              />
              <button className={cx("header-search-btn")}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>

            <button className={cx("login-btn")}>đăng nhập</button>

            <div className={cx("separator")}></div>

            <button className={cx("cart-shopping-btn")}>
              <i className="fa-solid fa-bag-shopping"></i>
              <span>giỏ hàng</span>
            </button>
          </div>
        </div>

        <div className={cx("bottom-header-container")}>
          <div className={cx("bottom-header-content")}>
            <div className={cx("link-item-container")}>
              <NavLink className={cx("link-item")}>Tất cả SP</NavLink>
            </div>
            <div className={cx("link-item-container")}>
              <div className={cx("toggle-hover-btn")}>
                <span>Sâm Ngọc Linh</span>
                <i className="fa-solid fa-angle-down"></i>

                <div className={cx("toggle-container")}>
                  <div className={cx("toggle-link-container")}>
                    <NavLink className={cx("link-item")}>
                      Sâm Ngọc Linh củ tươi
                    </NavLink>
                    <NavLink className={cx("link-item")}>
                      Rượu củ tươi Sâm Ngọc Linh ngâm bình
                    </NavLink>
                    <NavLink className={cx("link-item")}>Rượu quốc tửu</NavLink>
                    <NavLink className={cx("link-item")}>Rượu sâm</NavLink>
                    <NavLink className={cx("link-item")}>
                      Dịch chiết sâm
                    </NavLink>
                    <NavLink className={cx("link-item")}>Sâm mật ong</NavLink>
                    <NavLink className={cx("link-item")}>Trà sâm</NavLink>
                    <NavLink className={cx("link-item")}>Sâm yến</NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("link-item-container")}>
              <NavLink className={cx("link-item")}>Combo quà tặng</NavLink>
            </div>
            <div className={cx("link-item-container")}>
              <NavLink className={cx("link-item")}>Thực phẩm chức năng</NavLink>
            </div>
            <div className={cx("link-item-container")}>
              <NavLink className={cx("link-item")}>Nước tăng lực</NavLink>
            </div>
            <div className={cx("link-item-container")}>
              <NavLink className={cx("link-item")}>Nước uống collagen</NavLink>
            </div>
            <div className={cx("link-item-container")}>
              <NavLink className={cx("link-item")}>Sữa dê</NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
