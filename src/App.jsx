import Header from "./components/Header/Header";
import SideBarSlider from "./components/SideBarAndSlider/SideBarSlider";
import { Routes, Route } from "react-router-dom";

import SearchPage from "./SearchPage";
import { FilterReducer } from "./components/store/filterReducer";
import { useState } from "react";
function App() {
  const [filterArray, setFilterArray] = useState([]);

  return (
    <>
      <FilterReducer.Provider value={{ filterArray, setFilterArray }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <SideBarSlider />
              </>
            }
          ></Route>
          <Route
            path="/mobiles"
            element={
              <>
                <SearchPage />
              </>
            }
          ></Route>
        </Routes>
      </FilterReducer.Provider>
    </>
  );
}

export default App;
