import logo from "./logo.svg";
import "./App.css";
import Post from "./components/Post";

function App() {
  const post = {
    title: "Dinosaurs are awesome",
    synopsis: "Check out this body of a dinosaur that was found!",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
    author: "John Hammond",
    authorPicture: logo,
    publishDate: "Published on 2021-07-07",
  };
  const post2 = {
    title: "Dinosaurs are stupid",
    synopsis: "Check out this fake body of a dinosaur that was found!",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
    author: "John Hammond",
    authorPicture: logo,
    publishDate: "Published on 2021-07-07",
  };
  return (
    <div className="App">
      <Post {...post} />
      <Post {...post2} />
    </div>
  );
}

export default App;
