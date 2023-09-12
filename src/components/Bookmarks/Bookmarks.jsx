import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <>
      <div className="w-1/3 h-full mt-5 bg-slate-200 text-center px-8 py-6 rounded-md">
        <div className="border border-[#6047EC] bg-[#EFEDFD] rounded-lg py-5 mb-6">
          <h3 className="text-3xl text-[#6047EC]">
            Spending Time On Read: {readingTime}
          </h3>
        </div>

        <h1 className="text-3xl mb-6">Bookmarks blog:{bookmarks.length}</h1>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes,
};
export default Bookmarks;
