import Header from "./components/Header/Header";
import Mobiles from "./components/Search/SearchResults/Mobiles";
import SearchResults from "./components/Search/SearchResults/SearchResults";

const SearchPage = () => {
  return (
    <>
      <Header />

      <div className="flex">
        <Mobiles />
        <SearchResults />
      </div>
    </>
  );
};

export default SearchPage;
