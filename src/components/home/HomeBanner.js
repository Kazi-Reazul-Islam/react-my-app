import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const HomeBanner = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodo(res.data);
      })
      .catch(() => {});
  }, []);

  const deleteEvent = (id) => {
    let deletId = "Delete ID = " + id;
    alert(deletId);
    // API CAll Delete
  };

  const editEvent = (id) => {
    let editId = "Edit ID = " + id;
    alert(editId);
    // API CAll Edit
  };

  const detailsEvent = (id) => {
    let detailsId = "Details ID = " + id;
    alert(detailsId);
    // API CAll Details
  };

  const myList = todo.map((list) => {
    return (
      <tr>
        <td>{list.id}</td>
        <td>{list.title}</td>
        <td>
          <button
            onClick={deleteEvent.bind(this, list.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
        <td>
          <button
            onClick={editEvent.bind(this, list.id)}
            className="btn btn-success"
          >
            Edit
          </button>
        </td>
        <td>
          <button
            onClick={detailsEvent.bind(this, list.id)}
            className="btn btn-primary"
          >
            Details
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table className="table table-striped mx-2">
        <thead>
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Delete</td>
            <td>Edit</td>
            <td>Details</td>
          </tr>
        </thead>
        <tbody>{myList}</tbody>
      </table>
    </div>
  );
};

export default HomeBanner;
