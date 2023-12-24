import { useQuery } from 'react-query';
import axios from 'axios';

export function useReactQueryHook<T>(key: string, url: string) {
  return useQuery<T, Error>(key, async () => {
    const { data } = await axios.get(url);
    return data;
  });
}
