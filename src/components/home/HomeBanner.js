import axios from "axios";
import React, { useEffect, useState } from "react";

const HomeBanner = () => {
  let [todo, setTodo] = useState([]);

  useEffect(() => {
    // Api Call
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => {
        setTimeout(() => {
          setTodo(res.data);
        }, 1500);
      })
      .catch((err) => {});
  });

  return <div>{JSON.stringify(todo)}</div>;
};

export default HomeBanner;
