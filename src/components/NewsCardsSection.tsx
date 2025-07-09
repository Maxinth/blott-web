import { Fragment } from "react/jsx-runtime";
import NewsCard from "./NewsCard";
import type { FinnhubNewsItem } from "./data";
const NewsCardsSection = ({ data }: { data: FinnhubNewsItem[] }) => {
  return (
    <section className="w-full px-4 lg:px-12 pb-4">
      <h1 className="uppercase font-bold lg:font-medium text-2xl lg:text-5xl text-white lg:px-4 lg:py-10 lg:mb-0">
        News
      </h1>
      <div className="w-full py-4 lg:grid lg:grid-cols-4 gap-4">
        {data.map((user) => (
          <Fragment key={user.id}>
            <NewsCard {...user} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default NewsCardsSection;
