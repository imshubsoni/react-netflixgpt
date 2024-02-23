import { useSelector } from "react-redux";
import Header from "./Header";

const Browse = () => {
  const userInfo = useSelector((store) => store.user.user);

  return (
    <div className="text-xl">
      <Header />
      Logged In User Is :
      {userInfo && <span className="font-bold"> {userInfo.displayName}</span>}
    </div>
  );
};

export default Browse;
