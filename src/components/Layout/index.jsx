import styles from 'src/components/Layout/Layout.module.css';

export const Layout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
