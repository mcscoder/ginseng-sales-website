import classNames from "classnames/bind";
import style from "./TopFooter.module.scss";
import { NavLink } from "react-router-dom";
import { informationLinkItems } from "layouts/components/Header/config";

const cx = classNames.bind(style);

function TopFooter() {
  return (
    <div className={cx("top-footer-container")}>
      <div className={cx("top-footer-content")}>
        <div className={cx("flex-col")}>
          <div className={cx("footer-text-1")}>
            <h1>Alphabet Inc.</h1>
            <span>
              <strong>Trụ sở chính</strong>: 1600 Amphitheatre Parkway, Mountain
              View, California, Hoa Kỳ
            </span>
            <span>
              <strong>Văn phòng đại diện HCM</strong>: Tầng 21 Bitexco Financial
              Tower, Số 2 Hải Triều, Quận 1, TP. Hồ Chí Minh
            </span>
            <span>
              <strong>Website</strong>:
              <a href="https://www.google.com/"> https://www.google.com</a>
            </span>
            <span>
              <strong>Support</strong>:
              <a href="https://support.google.com">
                {" "}
                https://support.google.com
              </a>
            </span>
          </div>
        </div>

        <div className={cx("flex-col")}>
          <div className={cx("footer-text-2")}>
            {informationLinkItems.map((item, index) => {
              return (
                <div key={index} className={cx("footer-nav")}>
                  <NavLink to={item.path}>{item.label}</NavLink>
                </div>
              );
            })}
          </div>
        </div>

        <div className={cx("flex-col")}>
          <div className={cx("footer-text-3")}>
            <strong>
              Thực phẩm bảo vệ sức khỏe. Thực phẩm này không phải là thuốc và
              không có tác dụng thay thế thuốc chữa bệnh.
            </strong>
            <em>
              Các sản phẩm Rượu đang chờ xác nhận của Bộ Công Thương, chúng tôi
              không bán rượu cho người dưới 18 tuổi.
            </em>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopFooter;
