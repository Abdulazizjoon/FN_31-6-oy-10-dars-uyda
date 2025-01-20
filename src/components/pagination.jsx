import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
function Paginatio() {
  let page = 1;
  if (localStorage.getItem("id")) {
    page = Number(localStorage.getItem("id"));
  }
  let [data, setData] = useState([]);
  let [current, setCurrent] = useState(page);
  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?_page=${current}&_limit=2`
      )
      .then((response) => {
        if (response.status === 200) {
          setData(response.data);
        }
      });
  }, [current]);

  function handlePaginate(event, position) {
    setCurrent(position);
    localStorage.setItem("id", position);
  }
  return (
    <div>
      <div className="container mx-auto w-[500px]">
        {data.length > 0 &&
          data.map((value, index) => {
            return (
              <div
                key={index}
                className="p-3 border rounded-sm mt-5 mb-4 shadow-md cursor-pointer"
              >
                <h3 className="text-2xl mb-4">name: {value.name}</h3>
                <h3>body: {value.body}</h3>
              </div>
            );
          })}
        <Pagination onChange={handlePaginate} count={10} page={current} />
      </div>
    </div>
  );
}

export default Paginatio;
