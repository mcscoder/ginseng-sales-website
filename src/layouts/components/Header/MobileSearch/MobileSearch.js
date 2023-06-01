import classNames from "classnames/bind";
import style from "./MobileSearch.module.scss";
import layouts from "../config/layouts";

const cx = classNames.bind(style);
const id = layouts.mobile_search

function MobileSearch({ layout }) {
  return (
    <div
      className={cx("mobile-search")}
      style={layout === id ? {} : { display: "none" }}
    >
      <form className={cx("search-form")}>
        <input type="text" placeholder="Tìm kiếm..."/>
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
}

export default MobileSearch;
