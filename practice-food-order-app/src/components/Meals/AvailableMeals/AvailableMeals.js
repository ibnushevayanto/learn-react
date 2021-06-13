import { DUMMY_MEALS } from "../../../data/dummy-meals";
import styles from "./AvailableMeals.module.css";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((res) => (
    <MealItem key={res.id} id={res.id} data={res} />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
