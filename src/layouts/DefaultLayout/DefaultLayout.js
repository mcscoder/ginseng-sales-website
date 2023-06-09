// import Header from "../components/Header/Header";
import classNames from "classnames/bind";
import style from "./DefaultLayout.module.scss";
import Header from "layouts/components/Header/Header";
import Footer from "layouts/components/Footer/Footer";

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <main className={cx("main")}>{children}</main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
