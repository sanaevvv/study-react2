import styles from './Headline.module.css';

export function Headline({ page, children }) {
  return (
    <>
      <h1 className={styles.title}>{page} Page</h1>

      <p className={styles.description}>Get started by edit {children}</p>
    </>
  );
}
