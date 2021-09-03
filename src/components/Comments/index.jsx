import Link from 'next/link';
import { useComments } from 'src/hooks/useComments';

export const CommentsComponent = () => {
  const { data, error, isLoading, isEmpty } = useComments();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (isEmpty) {
    return <p>No users found.</p>;
  }
  return (
    <ol>
      {data.map((comments) => {
        return (
          <li key={comments.id}>
            <Link href={`/comments/${comments.id}`}>
              <a>{`${comments.name} (${comments.email})`}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
