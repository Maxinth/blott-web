import Navbar from "./components/Navbar";
import NewsCardsSection from "./components/NewsCardsSection";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { mockData } from "./components/data";

const token = import.meta.env.VITE_FINNHUB_API_KEY;

function App() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const response = await axios.get(
        `https://finnhub.io/api/v1/news?category=general&token=${token}`
      );
      return response.data;
    },
  });

  return (
    <main className="bg-[#0E0D13] font-rub ">
      <Navbar />
      <NewsCardsSection data={data} isLoading={isLoading} isError={isError} />
    </main>
  );
}

export default App;
