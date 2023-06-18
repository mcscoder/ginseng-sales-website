import { useState } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./LoginFormPopup.module.scss";
import { layouts } from "../../config";

const cx = classNames.bind(style);
const id = layouts.popup_login;

function LoginFormPopup({ layout }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className={cx("popup-container")}
      style={layout === id ? {} : { display: "none" }}
    >
      <div className={cx("popup-content")}>
        <form className={cx("form-container")}>
          <span className={cx("form-title")}>đăng nhập</span>
          <div className={cx("input-container")}>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label className={cx("top-label")}>tên đăng nhập hoặc email</label>
            <label className={cx("place-holder")}>
              tên đăng nhập hoặc email
            </label>
          </div>
          <div className={cx("input-container")}>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className={cx("top-label")}>mật khẩu</label>
            <label className={cx("place-holder")}>mật khẩu</label>
          </div>

          <div className={cx("save-password")}>
            <input type="checkbox" />
            <span>Ghi nhớ mật khẩu</span>
          </div>

          <div className={cx("submit-btn")}>
            <button type="submit">đăng nhập</button>
          </div>

          <div className={cx("forgot-password-link")}>
            <NavLink to={"/"}>Quên mật khẩu ?</NavLink>
          </div>
        </form>

        <div className={cx("separator")}></div>

        <form className={cx("form-container")}>
          <span className={cx("form-title")}>đăng ký</span>
          <div className={cx("input-container")}>
            <input type="text" required />
            <label className={cx("top-label")}>email</label>
            <label className={cx("place-holder")}>email</label>
          </div>

          <div className={cx("description")}>
            <span className={cx("eng")}>
              A password will be sent to your email address.
            </span>
            <span className={cx("vi")}>
              Thông tin cá nhân của bạn sẽ được sử dụng để tăng cường trải
              nghiệm sử dụng website, để quản lý truy cập vào tài khoản của bạn,
              và cho các mục đích cụ thể khác được mô tả trong chính sách riêng
              tư của chúng tôi.
            </span>
          </div>

          <div className={cx("submit-btn")}>
            <button type="submit">đăng ký</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginFormPopup;
