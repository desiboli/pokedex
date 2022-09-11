import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100"';

export const useGetPokemons = () => {
  const { data, error } = useSWR(url, fetcher);

  return { data, error };
};
