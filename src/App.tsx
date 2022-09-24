import React from 'react';
import Navbar from "./Navbar/Navbar";
import Search from "./Search/Search";
import {Routes, Route} from "react-router-dom";
import Result from "./Result/Result";

function App() {
  return (
      <>
          <Navbar/>
          <Routes>
              <Route index element={<Search />} />
              <Route path="/result" element={<Result />} />
          </Routes>
      </>
  );
}

export default App;
