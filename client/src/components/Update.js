import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
const Update = (props) => {
  const { id } = useParams();
  const [name, setName] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors/" + id)
      .then((res) => {
        setName(res.data.name);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateAuthor = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/authors/" + id, {
        name,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>
        <div className="top">
          <h1>Favorite authors</h1>
          <Link className="add" to={"/"}>
            Home{" "}
          </Link>
        </div>
        <div>
          <h3>Edit {name}</h3>
        </div>
        <form onSubmit={updateAuthor}>
          <div className="test1">
            <p className="mb-3">
              <label>Name:</label>
              <br />
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </p>
            <Link className="cancel" to={"/"}>
              Cancel
            </Link>
            <input className="editbtn" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
