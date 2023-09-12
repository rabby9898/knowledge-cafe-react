import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <>
      <div className="md:flex justify-between item-center mx-20 py-10 border-b-2">
        <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
        <img src={profile} alt="" />
      </div>
    </>
  );
};

export default Header;
