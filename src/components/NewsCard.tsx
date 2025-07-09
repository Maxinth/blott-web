import NewsImg from "../assets/Img.png";

const NewsCard = () => {
  return (
    <div className="w-fit ">
      <img src={NewsImg} alt="img" className="mb-2 object-contain w-full" />
      <div className="w-full">
        <div className="mb-2 text-white opacity-70 uppercase text-[12px] flex items-center w-full justify-between">
          <span>The Economic Times</span>
          <span>12 June 2021</span>
        </div>
        <p className="font-medium text-white text-lg">
          Markets FTSE slides almost 2pc as sterling sinks to $1.38
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
