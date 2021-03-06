import Head from 'next/head';
import { useRouter } from 'next/router';
import { CommentsByPostId } from 'src/components/Comments/commentsByPostId';
import { UserByUserId } from 'src/components/User/UserByUserId';
import { usePost } from 'src/hooks/usePost';

export const Post = () => {
  const router = useRouter();
  const { data, error, isLoading } = usePost(router.query.id);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>

      <UserByUserId id={data?.userId} />
      <CommentsByPostId id={data?.id} />
    </div>
  );
};
