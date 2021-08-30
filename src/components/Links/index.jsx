import { useCallback, useState } from 'react';
import styles from 'src/components/Links/Links.module.css';

const ITEMS = [
  {
    href: 'https://nextjs.org/docs',
    title: 'Documentation →',
    body: 'Find in-depth information about Next.js features and API.',
  },
  {
    href: 'https://nextjs.org/learn',
    title: 'Learn →',
    body: 'Learn about Next.js in an interactive course with quizzes!',
  },
  {
    href: 'https://github.com/vercel/next.js/tree/master/examples',
    title: 'Documentation →',
    body: 'Discover and deploy boilerplate example Next.js projects.',
  },
  {
    href: 'https://nextjs.org/docshttps://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: 'Deploy →',
    body: 'Instantly deploy your Next.js site to a public URL with Vercel.',
  },
];

export function Links() {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((items) => {
      items.slice(0, items.length - 1);
    });
  }, []);

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
