import React, { useMemo } from "react";
import MyParagraph from "./MyParagraph";
import classes from "./DemoOutput.module.css";

const DemoOutput = (props) => {
  const { items } = props;
  const sortedList = useMemo(() => items.sort((a, b) => a - b), [items]);

  return (
    <ul className={classes.list}>
      {sortedList.map((res) => (
        <li>
          <MyParagraph>{props.isShow && res} </MyParagraph>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(DemoOutput);

/**
 * React memo berguna agar setiap ada perubahan pada props tidak merender ulang komponen
 * Jangan mereact memo semua komponen
 *
 * Gunakan react memo pada component yang memiliki banyak child adalah best case
 */
