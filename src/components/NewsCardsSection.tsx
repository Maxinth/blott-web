import { Fragment } from "react/jsx-runtime";
import NewsCard from "./NewsCard";
import type { FinnhubNewsItem } from "./data";
import NewsCardSkeleton from "./NewsCardSkeleton";

const NewsCardsSection = ({
  data,
  isLoading,
  isError,
}: {
  data: FinnhubNewsItem[];
  isLoading: boolean;
  isError: boolean;
}) => {
  return (
    <section className="w-full px-4 lg:px-12 pb-4 pt-20">
      <h1 className="uppercase font-bold lg:font-medium text-2xl lg:text-5xl text-white lg:px-4 lg:py-10 lg:mb-0">
        News
      </h1>

      {isError && (
        <div className="text-white font-medium text-base h-[70vh] mt-6 lg:text-xl px-1 lg:px-4 ">
          Something went wrong. Please try again later.
        </div>
      )}
      <div className="w-full py-4 lg:grid lg:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
        {isLoading && (!data || data.length === 0) && (
          <>
            {Array.from({ length: 8 }).map((_, idx) => (
              <NewsCardSkeleton key={idx} />
            ))}
          </>
        )}

        {data?.map((user) => (
          <Fragment key={user.id}>
            <NewsCard {...user} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default NewsCardsSection;
