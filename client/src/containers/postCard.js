import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import { Link } from "react-router-dom";

export function PostCardContainer() {
  return (
    <div className="post-card mt-2 p-2 bg-white w-full h-auto shadow-sm rounded-md">
      <div className="post-user py-1 flex items-center">
        <div className="image w-8 h-8 rounded-full bg-black"></div>
        <div className="ml-3">
          <Link to="posts/1" className="text-sm font-bold text-gray-800">
            Sunmori ke Ujung Genteng
          </Link>
          <p className="text-xs text-gray-500">Ujang Alexander</p>
        </div>
      </div>
      <div className="post-body mt-1">
        <p className="text-xs text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
          consectetur adipisicing elit, sed eniam, quis nostrud exercitation
          ullamco ...
        </p>
      </div>
      <div className="post-action mt-1 flex">
        <div className="likes flex items-center py-1">
          <AiOutlineLike className="text-gray-500" />
          <p className="text-xs text-gray-500 ml-1">120 Likes </p>
        </div>
        <div className="comments flex items-center py-1 ml-4">
          <AiOutlineComment className="text-gray-500" />
          <p className="text-xs text-gray-500 ml-1">120 Comments </p>
        </div>
      </div>
    </div>
  );
}
