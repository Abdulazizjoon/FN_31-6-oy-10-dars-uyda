import React, { useEffect, useState } from "react";
import axios from "axios";

function ScrollPagination() {
  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);

  const loadMoreData = async () => {
    try {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      setData((e) => [...e, ...response.data]);
      setPage((e) => e + 1);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadMoreData();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  let handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      loadMoreData();
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {data.map((item) => (
        <div
          key={item.id}
          className="mb-4 p-4 border border-gray-300 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-700">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default ScrollPagination;
