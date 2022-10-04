import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';

const Home = () => {
  const expenses = [
    { id: 1, title: 'Paper', amount: 25, date: new Date('2021, 2, 27') },
    { id: 2, title: 'Fruits', amount: 250, date: new Date('2022, 4, 28') },
    { id: 3, title: 'Salt', amount: 7, date: new Date('2022, 5, 26') },
    { id: 4, title: 'Soap', amount: 125, date: new Date('2025, 1, 25') },
  ];

  return (
    <header className={styles.mainDiv}>
      <h1>Restaurant Vienna</h1>
      <div>
        <Link href={'/meals'}>
          <h2>All meals</h2>
        </Link>
      </div>
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
      <NewExpense />
      <div className="expenses">
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        />
      </div>
    </header>
  );
};

export default Home;
