import { VideoTitleType } from "../../utils/types";

const VideoTitle: React.FC<VideoTitleType> = ({ title, overview }) => {
  return (
    <div className="w-[100%] h-screen absolute text-white bg-gradient-to-r from-black">
      <div className=" absolute top-[30%] left-[10%]">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/2">{overview}</p>
        <div className="my-4 ">
          <button className=" bg-white text-black p-4 w-[180px] text-lg pointer-events-none rounded-lg hover:bg-opacity-70">
            ▶️ Play
          </button>
          <button className="hidden md:inline-block mx-2 w-[180px] pointer-events-none bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
export default VideoTitle;
