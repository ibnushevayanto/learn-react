import React, { useEffect } from "react";
import useRequest from "../../../hooks/useRequest";
import styles from "./AvailableMeals.module.css";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import Loading from "../../UI/Loading/Loading";

const AvailableMeals = () => {
  const { Data, Error, fetchData, IsLoading } = useRequest();

  useEffect(() => {
    fetchData(
      "https://learn-react-new-default-rtdb.firebaseio.com/meals.json",
      {
        method: "GET",
      }
    );
  }, [fetchData]);

  const mealsList = Data.map((res) => (
    <MealItem key={res.id} id={res.id} data={res} />
  ));

  return IsLoading ? (
    <Loading />
  ) : Error ? (
    <p className={styles["error-text"]}>{Error}</p>
  ) : (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
