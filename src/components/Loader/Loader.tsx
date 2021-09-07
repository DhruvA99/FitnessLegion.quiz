import React from "react";
import classes from "./Loader.module.css";

const Loader = (): JSX.Element => {
  return (
    <div>
      <div
        className={`${classes.loader} ease-linear rounded-full border-8 border-t-8 border-gray-200 h-40 w-40`}
      ></div>
    </div>
  );
};

export default Loader;
