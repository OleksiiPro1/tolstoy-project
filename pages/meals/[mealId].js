/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { allMeals } from '../util/database';

const mealStyles = css`
  margin: 50px;
`;
export default function Meal(props) {
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
