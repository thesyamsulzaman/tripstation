import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export default function PostDetail() {
  return (
    <section className="bg-indigo-800 h-screen py-3">
      <div className="mx-auto p-3 mt-2 h-screen bg-gray-100 rounded-xl">
        <Link to="/">
          <BiArrowBack />
          Back
        </Link>
        <h1 className="p-3">Post Detail</h1>
      </div>
    </section>
  )
}
