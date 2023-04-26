import useAppContext from "../Hooks/useContext";
import NavBar from "./Nav";

const Home = () => {
  const { isLoading } = useAppContext();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <NavBar />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
