import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import Paginatio from "./components/pagination";
import ScrollPagination from "./components/scrollPagination";

function App() {
  

  return (
    <div>
      <Paginatio></Paginatio>
      <ScrollPagination></ScrollPagination>
    </div>
  )
}

export default App;

