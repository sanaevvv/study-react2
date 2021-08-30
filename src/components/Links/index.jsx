import styles from 'src/components/Links/Links.module.css';

export function Links({ items, handleReduce }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => {
        return (
          <a key={item.index} href={item.href} className={styles.card}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </a>
        );
      })}
      <button onClick={handleReduce}>減らす</button>
    </div>
  );
}
