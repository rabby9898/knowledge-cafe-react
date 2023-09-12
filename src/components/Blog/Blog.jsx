import PropTypes from "prop-types";
import { BiBookmark } from "react-icons/bi";
const Blog = ({ blog, handleBookmark, handleReadingTime }) => {
  const {
    id,
    title,
    cover_img,
    author_img,
    author_name,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="w-4/5">
      <img className="w-full" src={cover_img} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex gap-6 items-center my-7">
          <img className="w-20" src={author_img} alt="" />
          <div>
            <h3>{author_name}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <p>{reading_time} min read</p>
          <button onClick={() => handleBookmark(blog)} className="text-3xl">
            <BiBookmark />
          </button>
        </div>
      </div>

      <h1 className="w-4/5 text-4xl font-bold">{title}</h1>
      <div className="flex gap-3">
        {hashtags.map((tag, index) => (
          <p key={index} className="text-[#6047EC] my-7">
            <a href="">#{tag}</a>
          </p>
        ))}
      </div>
      <button
        onClick={() => handleReadingTime(reading_time, id)}
        className="text-[#6047EC] mb-10 underline"
      >
        Mark as read
      </button>
      <div className="border-b-2 mb-7"></div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
};

export default Blog;
