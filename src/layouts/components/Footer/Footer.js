import classNames from "classnames/bind";
import style from "./Footer.module.scss";
import TopFooter from "./components/TopFooter/TopFooter";
import BottomFooter from "./components/BottomFooter/BottomFooter";

const cx = classNames.bind(style)

function Footer() {
  return (
    <footer className={cx("main-footer")}>
      <TopFooter />
      <BottomFooter />
    </footer>
  );
}

export default Footer;
