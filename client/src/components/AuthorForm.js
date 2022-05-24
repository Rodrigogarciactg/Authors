import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
const AuthorForm = (props) => {
  const { Author, setAuthor } = props;
  // const { id } = useParams();
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/authors", {
        name,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
        setName([...name, res.data]);
        setName("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="top">
        <h1>Favorite Authors</h1>
        <Link className="" to={"/"}>
          Home{" "}
        </Link>
      </div>
      <div>
        <h3>Add a new author</h3>
      </div>
      <>
        <Form onSubmit={onSubmitHandler}>
          <div className="test">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                className="input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {name.length < 3 && name.length > 0 ? (
                <p>Author Name must be at least 3 characters</p>
              ) : null}
            </Form.Group>
          </div>
          <div className="buttons">
            <Link className="cancel" to={"/"}>
              Cancel
            </Link>
            <input className="editbtn" type="submit" value="Submit" />
          </div>
        </Form>
        {/* </div> */}
      </>
    </div>
  );
};

export default AuthorForm;
