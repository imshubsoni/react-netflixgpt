import { useSelector } from "react-redux";
import Header from "./Header";
import MainContainer from "./MainContainer";

const Browse = () => {
  const userInfo = useSelector((store) => store.user.user);

  return (
    <div className="text-xl">
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
