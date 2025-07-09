import type { FinnhubNewsItem } from "./data";
import { formateDate } from "../utils/formatDate";
const NewsCard = ({
  headline,
  image,
  source,
  url,
  datetime,
}: FinnhubNewsItem) => {
  return (
    <div className="w-fit flex lg:flex-col items-start gap-4  group hover:bg-gray-800/45 p-4 cursor-pointer ease-in-out transition-all duration-300 ">
      <img
        src={image}
        alt="img"
        className="mb-2 lg:object-contain lg:w-full w-1/4 !h-full object-cover"
      />
      <div className="lg:w-full w-3/4">
        <div className="mb-2 text-white opacity-70 uppercase text-[12px] flex items-center w-full justify-between">
          <span>{source}</span>
          <span>{formateDate(datetime)}</span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-white text-lg group-hover:underline"
        >
          {headline}
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
