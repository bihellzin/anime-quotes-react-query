import { useQuery } from "react-query";

interface AnimeApiResponse {
  anime: string;
  character: string;
  quote: string;
}

export default function useAnimeQuote() {
  return useQuery(
    "animeQuote",
    () =>
      fetch("https://animechan.xyz/api/random").then(
        (res) => res.json() as unknown as AnimeApiResponse
      ),
    {
      retry: 0,
      refetchOnWindowFocus: false,
    }
  );
}
