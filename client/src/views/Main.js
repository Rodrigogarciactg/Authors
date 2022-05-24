import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthorForm from "../components/AuthorForm";
import AuthorList from "../components/AuthorList";
const Main = (props) => {
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/authors/").then((res) => {
      setAuthor(res.data);
    });
  });

  const removeFromDom = (authorId) => {
    setAuthor(author.filter((author) => author._id != authorId));
  };

  return (
    <div>
      {/* <PetForm pet={pet} setPet={setPet} /> */}
      <hr />
      <AuthorList
        author={author}
        setAuthor={setAuthor}
        removeFromDom={removeFromDom}
      />
    </div>
  );
};
export default Main;
