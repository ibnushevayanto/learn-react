import React from "react";
import Card from "../../UI/Card/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      {props.users.length > 0 ? (
        <uL>
          {props.users.map((res, index) => (
            <li key={res + index}>
              {res.username} {res.age} years old
            </li>
          ))}
        </uL>
      ) : (
        <div className={styles.textCenter}></div>
      )}
    </Card>
  );
};

export default UsersList;
