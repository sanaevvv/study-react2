import styles from 'src/components/Headline/Headline.module.css';

export function Headline({ page, children, handleReduce }) {
  return (
    <>
      <h1 className={styles.title}>{page} Page</h1>

      <p className={styles.description}>アイテムの数は{children}個です</p>

      <button onClick={handleReduce}>減らす</button>
    </>
  );
}
