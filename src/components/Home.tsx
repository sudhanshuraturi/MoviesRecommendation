import { Outlet } from "react-router-dom";
import Header from "./common/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Home;
