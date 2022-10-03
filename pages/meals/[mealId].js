/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import { PHASE_DEVELOPMENT_SERVER } from 'next/dist/shared/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { allMeals } from '../util/database';

const mealStyles = css`
  margin: 50px;
`;
// training
// const person = {
//   name: 'Alexey',
//   surname: 'Piltenko',
//   age: 34,
//   juniorWebDeveloper: true,
// };
// const secondPerson = { ...person };
// console.log(secondPerson);

// let x = 25;
// if (x === 25) {
//   let x = 50;
//   console.log(x);
// }
// console.log(x);

// const number1 = 555;

// console.log(number1);

// const fruits = ['Apple', 'Banana'];
// console.log(fruits.length);
// console.log(fruits[0]);

// const array1 = [1, 4, 9, 16];
// const map1 = array1.map((x) => x * 2);
// console.log(map1);
// const found = array1.find((element) => element > 15);
// console.log(found);

// const words = [
//   'spray',
//   'limit',
//   'elite',
//   'exuberant',
//   'destruction',
//   'present',
// ];
// const result = words.filter((word) => word.length < 6);
// console.log(result);

// const array3 = [1, 2, 3, 4, 5, 6];
// const initialValue = 0;
// const sumWithInitial = array3.reduce(
//   (previosValue, currentValue) => previosValue + currentValue,
//   initialValue,
// );
// console.log(sumWithInitial);

const array5 = ['a', 'b', 'c'];
const array6 = ['d', 'e', 'f'];
const array7 = array5.concat(array6);
console.log(array7);

// end training
export default function Meal(props) {
  const [isInMeals, setIsInMeals] = useState(false);
  if (!props.meal) {
    return (
      <div css={mealStyles}>
        <h1>Meal not found</h1>
      </div>
    );
  }

  return (
    <div css={mealStyles}>
      <div>
        <div>
          <h1>
            <Link href={'../meals'}>Back to all meals</Link>
          </h1>
        </div>{' '}
        <Image
          src={`/${props.meal.id}.png`}
          alt="room"
          width="400px"
          height="300px"
        />
      </div>
      <div>Meal: {props.meal.meal}</div>
      <div>Price: {props.meal.price}$</div>
      <div>Description: {props.meal.description}</div>

      <button
        onClick={() => {
          const currentMeal = Cookies.get('meals')
            ? JSON.parse(Cookies.get('meals'))
            : [];

          let newMeal;

          if (currentMeal.find((id) => props.meal.id === id)) {
            newMeal = currentMeal.filter((id) => id !== props.meal.id);
          } else {
            newMeal = [...currentMeal, props.meal.id];
          }

          Cookies.set('meals', JSON.stringify([newMeal]));
        }}
      >
        {Cookies.get('meals') &&
        JSON.parse(Cookies.get('meals')).find((id) => props.meal.id === id)
          ? 'Remove from cart'
          : 'Add to cart'}
      </button>
    </div>
  );
}

export function getServerSideProps(context) {
  const meals = allMeals.find((meal) => {
    return meal.id === context.query.mealId;
  });

  if (!meals) {
    context.res.statusCode = 404;
  }

  return {
    props: {
      meal: meals || null,
    },
  };
}
