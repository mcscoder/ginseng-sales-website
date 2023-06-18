import classNames from "classnames/bind";
import style from "./ProductDescription.module.scss";

const cx = classNames.bind(style);

function ProductDescription({ details = [] }) {
  return (
    <div className={cx("container")}>
      <div className={cx("wrapper-content")}>
        {details.map((detail, index) => {
          return (
            <div key={index} className={cx("detail-col")}>
              <div className={cx("flex-col")}>
                <div className={cx("title")}>
                  <h1>{detail.title}</h1>
                </div>
              </div>
              <div className={cx("flex-col")}>
                <div className={cx("content")}>
                  <ul>
                    {detail.contents.map((content, index) => {
                      return <li key={index}>{content}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductDescription;
