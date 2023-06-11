import classNames from "classnames/bind";
import style from "./BottomFooter.module.scss";

const cx = classNames.bind(style);

function BottomFooter() {
  return (
    <div className={cx("bottom-footer-container")}>
      <div className={cx("bottom-footer-content")}>
        <span>
          Copyright 2023 ©<strong> Create by Phan Ta Tan Luc Team</strong>
        </span>
      </div>
    </div>
  );
}

export default BottomFooter;
