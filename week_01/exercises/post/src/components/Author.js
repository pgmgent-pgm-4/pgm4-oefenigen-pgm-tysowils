import React from "react";

export default function Author({ author, authorPicture, publishDate }) {
  return (
    <div>
      <img className="App-logo" src={authorPicture} alt={author} />
      <p>{author}</p>
      <p>{publishDate}</p>
    </div>
  );
}
