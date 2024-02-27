import DropdownMenu from "../components/DropdownMenu";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="m-4 flex flex-col gap-5">
      <SearchBar />
      <DropdownMenu />
    </div>
  );
};
export default Home;
