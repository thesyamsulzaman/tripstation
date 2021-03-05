import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { 
  PostCardContainer, 
  CommentsContainer,
  CommentCardContainer,
} from "../containers";

export default function PostDetail() {
  return (
    <section className="bg-indigo-800 h-screen py-3">
      <div className="mx-auto p-3 mt-2 h-screen bg-gray-100 rounded-xl">
        <Link to="/" className="flex items-center">
          <BiArrowBack className="mr-2"/>
          Back
        </Link>
        <PostCardContainer />
        <CommentsContainer>
          <CommentCardContainer />
          <CommentCardContainer />
          <CommentCardContainer />
          <CommentCardContainer />
          <CommentCardContainer />
          <CommentCardContainer />
        </CommentsContainer>
        <div className="fixed inset-x-0 bottom-0">
          <form className="flex items-center px-2">
            <input type="text" className="py-2 px-3 border-2 border-gray-900 shadow-md" placeholder="Say something"/>
            <input type="submit" value="Send" className="bg-gray-900 flex-1" />
          </form>
        </div>
      </div>
    </section>
  )
}
