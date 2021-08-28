import styles from '../styles/Home.module.css';

export function Headline({ title, page }) {
  return (
    <>
      <h1 className={styles.title}>{page} Page</h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/{page}.js</code>
      </p>
    </>
  );
}
