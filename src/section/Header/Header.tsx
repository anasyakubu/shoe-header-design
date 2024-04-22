import HeaderCard from "../../components/shared/HeaderCard/HeaderCard";
import Nav from "../../components/shared/Nav";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="bg-black text-white div">
        <Nav />
        <div className="py-7 p-10">
          <HeaderCard />
        </div>
      </div>
    </div>
  );
};

export default Header;
