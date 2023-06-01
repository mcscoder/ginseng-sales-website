import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinkItems, informationLinkItems } from "../config/sidebarItems";
import menuItems from "../config/menuItems";
import classNames from "classnames/bind";
import style from "./NavSidebar.module.scss";
import layouts from "../config/layouts";

const cx = classNames.bind(style);
const id = layouts.nav_sidebar;

function NavSidebar({ layout, closeNavSidebar = () => {} }) {
  console.log("Nav-Sidebar re-render");
  const [activeMenu, setActiveMenu] = useState(0);
  // 0: product hover active; - 1: information hover active;
  const [currentMenu, setCurrentMenu] = useState(0);
  // 0: display product; - 1: display information;
  const [initialDisplay, setInitialDisplay] = useState(false);
  // false: none, true otherwise

  function handleMenuClick(index) {
    setCurrentMenu(index);
    setActiveMenu(index);
  }

  function handleMouseOver(index) {
    setActiveMenu(index);
  }

  function handleMouseOut() {
    setActiveMenu(currentMenu);
  }

  useEffect(() => {
    if (layout === id) setInitialDisplay(true);
  }, [layout]);

  return (
    <div
      className={cx(
        "sidebar-container",
        layout === id ? "slide-left-to-right" : "slide-right-to-left"
      )}
      style={initialDisplay ? { display: "block" } : {}}
    >
      <div className={cx("sidebar-content")}>
        <div className={cx("menu")}>
          {menuItems.map((item, index) => {
            return (
              <button
                key={index}
                className={cx("btn", {
                  "active-btn": activeMenu === index,
                })}
                onClick={() => handleMenuClick(index)}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={handleMouseOut}
              >
                {item.label}
              </button>
            );
          })}

          <button onClick={closeNavSidebar} className={cx("close-btn")}>
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </button>
        </div>

        <div
          className={cx("product-section")}
          style={currentMenu === 0 ? {} : { display: "none" }}
        >
          <div className={cx("sidebar-search-container")}>
            <form className={cx("sidebar-search")}>
              <input
                type="text"
                className={cx("sidebar-search-input")}
                placeholder="Tìm kiếm..."
              />
              <button className={cx("sidebar-search-btn")}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>

          <div className={cx("sidebar-nav")}>
            {navLinkItems.map((item, index) => {
              return (
                <NavLink key={index} className={cx("sidebar-link-item")}>
                  <img src={item.imgSrc} />
                  <span>{item.productName}</span>
                </NavLink>
              );
            })}
          </div>
        </div>

        <div
          className={cx("information-section")}
          style={currentMenu === 1 ? {} : { display: "none" }}
        >
          <div className={cx("sidebar-information")}>
            {informationLinkItems.map((item, index) => {
              return (
                <NavLink key={index} className={cx("sidebar-link-item")}>
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavSidebar;
