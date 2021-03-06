import Link from 'next/link';
import { usePost } from 'src/hooks/usePost';

export const PostByCommentId = (props) => {

  const { data, error, isLoading } = usePost(props.id);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  return (
    <div>
      <Link href={`/posts/${data?.id}`}>
        <a>{data?.title}</a>
      </Link>
    </div>
  );
};
