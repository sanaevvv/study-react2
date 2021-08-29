import styles from 'src/components/Main/Main.module.css';
import { Links } from 'src/components/Links';
import { Headline } from 'src/components/Headline';

export function Main({ page }) {

  return (
    <main className={styles.main}>
      <Headline page={page}>
        <code className={styles.code}>pages/{page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
