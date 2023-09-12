import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;

  return (
    <>
      <div className=" bg-white rounded-xl px-4">
        <h3 className="text-2xl my-5 ">{title}</h3>
      </div>
    </>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
