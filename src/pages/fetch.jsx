import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log({ err }))
        .finally(() => console.log("finally"));
    } catch (err) {
      console.log(err);
    } finally {
      console.log("finally qwe");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <>Hello</>;
};
export default Fetch;
