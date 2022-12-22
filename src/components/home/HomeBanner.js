import axios from "axios";
import React, { Component } from "react";

class HomeBanner extends Component {
  constructor() {
    super();
    this.state = {
      toDoList: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => {
        this.setState({ toDoList: res.data });
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    const myList = this.state.toDoList.map((item) => {
      return (
        <tr>
          <td>{item.id}</td>
          <td>{item.title}</td>
        </tr>
      );
    });
    return (
      <div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>
                <strong>Id</strong>
              </td>
              <td>
                <strong>Title</strong>
              </td>
            </tr>
          </thead>
          <tbody>{myList}</tbody>
        </table>
      </div>
    );
  }
}

export default HomeBanner;
