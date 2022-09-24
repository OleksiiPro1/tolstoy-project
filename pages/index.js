import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { allMeals } from './util/database';

export default function Home() {
  return (
    <header className={styles.mainDiv}>
      <h1>Restaurant Vienna</h1>
      <div className={styles.mainScreenStyle}>
        <div className={styles.textDivStyle1}>
          <p>
            It’s often said that first impressions are the last impressions.
            That’s why it’s vital to make sure that your establishment offers
            excellent customer service. Indeed, the provision of a warm welcome
            and ongoing attentiveness can be one of the things that sets you
            apart from the competition, ultimately helping to drive loyalty with
            customers. The statistics show that after just one negative
            experience at a restaurant, 51% of customers will never do business
            with that company again. Just imagine choosing to dine at a fine
            dining restaurant and no one greets you or walks to your table, how
            would you feel about that experience? That’s why when guests choose
            to dine at your restaurant the welcome is important. The way they
            receive this welcome will set the tone for the rest of the dining
            experience. Your host needs to make guests feel welcome in their
            initial interaction, and it needs to continue throughout the whole
            experience. The reputation of your venue could depend on it. We’ve
            put together some tips to make sure you, and your staff, are
            welcoming and greeting guests in your restaurant in the best way
            possible.
          </p>
        </div>
        <div className={styles.textDivStyle2}>
          <Image
            src="/porterhouse-59c13028519de2001049767c.jpg"
            alt="room"
            width="485px"
            height="364px"
          />
        </div>
      </div>
      <div className={styles.textDivStyle3}>
        <p>
          It’s often said that first impressions are the last impressions.
          That’s why it’s vital to make sure that your establishment offers
          excellent customer service. Indeed, the provision of a warm welcome
          and ongoing attentiveness can be one of the things that sets you apart
          from the competition, ultimately helping to drive loyalty with
          customers. The statistics show that after just one negative experience
          at a restaurant, 51% of customers will never do business with that
          company again. Just imagine choosing to dine at a fine dining
          restaurant and no one greets you or walks to your table, how would you
          feel about that experience? That’s why when guests choose to dine at
          your restaurant the welcome is important. The way they receive this
          welcome will set the tone for the rest of the dining experience. Your
          host needs to make guests feel welcome in their initial interaction,
          and it needs to continue throughout the whole experience. The
          reputation of your venue could depend on it. We’ve put together some
          tips to make sure you, and your staff, are welcoming and greeting
          guests in your restaurant in the best way possible.
        </p>
      </div>
      <h1>Meals</h1>
      {allMeals.map((allMeal) => {
        return (
          <div className={styles.mealsStyles} key={`allMeal-${allMeal.id}`}>
            <div>Meal: {allMeal.meal}</div>
            <div>Price: {allMeal.price}</div>
            <div>description: {allMeal.description}</div>
          </div>
        );
      })}
    </header>
  );
}
