import { QueryClient, QueryClientProvider } from "react-query";
import useAnimeQuote from "./hooks/useAnimeQuote";
import "./App.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <QuoteContainer />
    </QueryClientProvider>
  );
}

function QuoteContainer() {
  const { isLoading, error, data, refetch, isFetching, isRefetchError } =
    useAnimeQuote();

  if (isLoading || isFetching) {
    return (
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error || isRefetchError)
    return (
      <div>
        <h1>An error occurred</h1>
      </div>
    );

  return (
    <div>
      <h1>{data!.anime}</h1>
      <p>{data!.character}</p>
      <p>
        <strong>{data!.quote}</strong>
      </p>
      <button onClick={() => refetch()}>New quote</button>
    </div>
  );
}
