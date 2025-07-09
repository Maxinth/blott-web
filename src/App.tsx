import Navbar from "./components/Navbar";
import NewsCardsSection from "./components/NewsCardsSection";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { mockData } from "./components/data";

const token = import.meta.env.VITE_FINNHUB_API_KEY;

function App() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const response = await axios.get(
        `https://finnhub.io/api/v1/news?category=general&token=${token}`
      );
      return response.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching users</p>;

  console.log({ data });
  return (
    <main className="bg-[#0E0D13] font-rub ">
      <Navbar />
      <NewsCardsSection data={mockData} />
    </main>
  );
}

export default App;
