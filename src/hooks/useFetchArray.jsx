import { fetcher } from 'src/utils/fetcher';
import useSWR from 'swr';

export const useFetchArray = (url) => {
  const { data, error } = useSWR(url, fetcher);
  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};

const API_URL = 'https://jsonplaceholder.typicode.com';

// users
export const useUsers = () => {
  return useFetchArray(`${API_URL}/users`);
};

// comments
export const useComments = () => {
  return useFetchArray(`${API_URL}/comments`);
};

export const useCommentsByPostId = (id) =>
  useFetchArray(id ? `${API_URL}/comments?postId=${id}` : null);

// posts
export const usePosts = () => {
  return useFetchArray(`${API_URL}/posts`);
};

export const usePostsByUserId = (id) =>
  useFetchArray(id ? `${API_URL}/posts?userId=${id}` : null);
