import { Fragment } from "react";
import Counter from "./Counter";
const SectionTitle = ({
  title,
  countValue = 34500,
  subtitle1 = "One site",
  subtitle2 = "",
  bg,
}) => {
  return (
    <Fragment>
      <h2>{title}</h2>
      <p>
        {subtitle2}
      </p>
    </Fragment>
  );
};
export default SectionTitle;
