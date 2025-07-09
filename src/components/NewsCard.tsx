import NewsImg from "../assets/Img.png";

const NewsCard = () => {
  return (
    <div className="w-fit flex lg:flex-col items-start gap-4  group hover:bg-gray-800/45 p-4 cursor-pointer ease-in-out transition-all duration-300 ">
      <img
        src={NewsImg}
        alt="img"
        className="mb-2 lg:object-contain lg:w-full w-1/4 !h-full object-cover"
      />
      <div className="lg:w-full w-3/4">
        <div className="mb-2 text-white opacity-70 uppercase text-[12px] flex items-center w-full justify-between">
          <span>The Economic Times</span>
          <span>12 June 2021</span>
        </div>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-white text-lg group-hover:underline"
        >
          Markets FTSE slides almost 2pc as sterling sinks to $1.38
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
