import Link from 'next/link';
import styles from "src/components/Header/Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>Index</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </header>
  );
};
