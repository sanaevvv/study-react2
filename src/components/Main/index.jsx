import styles from 'src/components/Main/Main.module.css';
import { Links } from 'src/components/Links';
import { Headline } from 'src/components/Headline';
import { useCallback, useState } from 'react';

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

export function Main({ page }) {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((items) => items.slice(0, items.length - 1));
  }, []);

  return (
    <main className={styles.main}>
      <Headline page={page} handleReduce={handleReduce}>
        <code className={styles.code}>{items.length}</code>
      </Headline>
      <Links items={items} handleReduce={handleReduce} />
    </main>
  );
}
