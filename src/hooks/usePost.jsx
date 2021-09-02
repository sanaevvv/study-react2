import { useRouter } from 'next/router';
import { fetcher } from 'src/utils/fetcher';
import useSWR from 'swr';

export const usePost = () => {
  const router = useRouter();
  const { data: post, error: postError } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/postsaaa/${router.query.id}`
      : null,
    fetcher
  );
  const { data: user, error: userError } = useSWR(
    post?.userId
      ? `https://jsonplaceholder.typicode.com/users/${post.userId}`
      : null,
    fetcher
  );

  return {
    post,
    user,
    error: postError || userError,
    isLoading: !postError && !userError,
  };
};
