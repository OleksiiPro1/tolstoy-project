import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { allMeals } from './util/database';

export default function AllMeals(props) {
  return (
    <div>
      <h1>Meals</h1>

      {props.meals.map((allMeal) => {
        return (
          <div className={styles.mealsStyles} key={`allMeal-${allMeal.id}`}>
            <div>
              <Image
                src={`/${allMeal.id}.png`}
                alt="room"
                width="80px"
                height="60px"
              />
            </div>
            <div>
              Meal: <Link href={`/meals/${allMeal.id}`}>{allMeal.meal}</Link>
            </div>
            <div>Price: {allMeal.price}</div>
            <div>description: {allMeal.description}</div>
          </div>
        );
      })}
      <div>
        <Link href={'/'}>
          <h2>Main page</h2>
        </Link>
      </div>
    </div>
  );
}

export function getServerSideProps() {
  return {
    props: {
      meals: allMeals,
    },
  };
}
