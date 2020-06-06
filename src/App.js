import React, { useState, useEffect } from "react";
import Item from "./item";
import "./App.css";

function App() {
  const [list, setLists] = useState(Array.from(Array(30).keys(), (n) => n + 1));
  const [fetchData, setFetchData] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (fetchData === false) return;
    fetchDataList();
  }, [fetchData]);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setFetchData(true);
  };
  const fetchDataList = () => {
    setTimeout(() => {
      setLists((preList) => [
        ...preList,
        ...Array.from(Array(20).keys(), (n) => n + preList.length + 1),
      ]);
      setFetchData(false);
    }, 2000);
  };
  return (
    <div className="App">
      {list.map((item) => (
        <Item value={item} key={item} />
      ))}
      {fetchData && <div>Loading</div>}
    </div>
  );
}

export default App;
