import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export function useSWRHook<T>(url: string) {
  const { data, error } = useSWR<T>(url, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error
  };
}
