import { allMeals } from '../util/database';

export default function Meals() {
  return <div>{allMeals.meal}</div>;
}
