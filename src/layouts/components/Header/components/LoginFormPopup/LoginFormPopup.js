import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./LoginFormPopup.module.scss";
import { layouts } from "../../config";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email("vui lòng nhập đúng định dạng email"),
  })
  .required();

const cx = classNames.bind(style);
const id = layouts.popup_login;

function LoginFormPopup({ layout }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault(); // Ngăn chặn hành vi gửi form mặc định

    handleLogin();
  }

  function handleLogin() {
    const url = "http://localhost:8080/authenticate/login";

    console.log("login");

    const data = {
      email: username,
      password: password,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          console.log("login failed");
        }
      })
      .then((data) => {
        console.log(data);

        // Lưu token vào localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", username)

        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleForRegister(event) {
    event.preventDefault(); // Ngăn chặn hành vi gửi form mặc định

    handleRegister();
  }

  function handleRegister() {
    const url = "http://localhost:8080/authenticate/register";

    const data = {
      email: regUsername,
      password: regPassword,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          console.log("login failed");
        }
      })
      .then((data) => {
        console.log(data);

        // Lưu token vào localStorage
        localStorage.setItem(data.token);
        localStorage.setItem("username", username)

        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div
      className={cx("popup-container")}
      style={layout === id ? {} : { display: "none" }}
    >
      <div className={cx("popup-content")}>
        <form className={cx("form-container")} onSubmit={handleFormSubmit}>
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

        <form className={cx("form-container")} onSubmit={handleForRegister}>
          <span className={cx("form-title")}>đăng ký</span>
          <div className={cx("input-container")}>
            <input
              type="text"
              onChange={(e) => setRegUsername(e.target.value)}
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
              onChange={(e) => setRegPassword(e.target.value)}
              required
            />
            <label className={cx("top-label")}>mật khẩu</label>
            <label className={cx("place-holder")}>mật khẩu</label>
          </div>

          <div className={cx("submit-btn")}>
            <button type="submit">đăng ký</button>
          </div>
        </form>

        <div className={cx("separator")}></div>

        {/* <form className={cx("form-container")}>
          <span className={cx("form-title")}>đăng ký</span>
          <div className={cx("input-container")}>
            <input type="text" required {...register("email")} />
            <label className={cx("top-label")}>email</label>
            <label className={cx("place-holder")}>email</label>
          </div>
          <p className={cx("validate-message")}>{errors.email?.message}</p>

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
            <button>đăng ký</button>
          </div>
        </form> */}
      </div>
    </div>
  );
}

export default LoginFormPopup;
