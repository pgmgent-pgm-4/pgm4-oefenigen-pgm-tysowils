import React from "react";
import Author from "./Author";

export default function Post({
  title,
  synopsis,
  story,
  author,
  authorPicture,
  publishDate,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{synopsis}</h2>
      <p>{story}</p>
      <Author
        author={author}
        authorPicture={authorPicture}
        publishDate={publishDate}
      />
    </div>
  );
}
