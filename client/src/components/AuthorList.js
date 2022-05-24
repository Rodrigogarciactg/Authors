import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
const AuthorList = (props) => {
  const { removeFromDom, author, setAuthor } = props;
  const deleteAuthor = (authorID) => {
    axios
      .delete("http://localhost:8000/api/authors/" + authorID)
      .then((res) => {
        removeFromDom(authorID);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <div className="top">
        <h1>Favorite Authors</h1>
        <Link className="add" to={"/authors/new"}>
          Add an author
        </Link>
      </div>
      <div>
        <h3>We have quotes by: </h3>
      </div>
      {author.map((author, index) => {
        return (
          <div key={index}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Author</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tr">
                  <td>{author.name}</td>
                  <td>
                    {" "}
                    {/* <Link className="tabs" to={"/authors/" + author._id}>
                      {" "}
                      Details
                    </Link>
                    | */}
                    <div className="btnContainer">
                      <Link className="btn" to={"/authors/edit/" + author._id}>
                        Edit
                      </Link>
                      <button
                        className="adoptbtn"
                        onClick={(e) => {
                          deleteAuthor(author._id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        );
      })}
    </div>
  );
};

export default AuthorList;
