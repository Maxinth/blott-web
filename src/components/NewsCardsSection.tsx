import NewsCard from "./NewsCard";
const NewsCardsSection = () => {
  return (
    <section className="w-full px-4 lg:px-12 pb-4">
      <h1 className="uppercase font-bold lg:font-medium text-2xl lg:text-5xl text-white lg:px-4 lg:py-10 lg:mb-0">
        News
      </h1>
      <div className="w-full py-4 lg:grid lg:grid-cols-4 gap-4">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </section>
  );
};

export default NewsCardsSection;
