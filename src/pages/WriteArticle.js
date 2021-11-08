import React from "react";
import Meta from "../components/Helmet/Meta";
import "../components/Navbar/NavBar.css";
function WriteArticle() {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState("");
  const [tags, setTags] = React.useState("");
  const token = localStorage.getItem("token");
  const isLoggedin = Boolean(token);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, content, image, tags.split(","));
  };

  return (
    <>
      {isLoggedin && (
        <>
          <Meta title="Write Article" />
          <div class="flex flex-col items-center min-w-screen bg-blue-400-lighter mb-4">
            <div class="w-full bg-white rounded shadow-lg p-8 lg:m-4">
              <h2 class="text-center font-serif  uppercase text-4xl xl:text-5xl">
                Write Article
              </h2>
              <div class="flex flex-col mb-4">
                <label
                  class="mb-2 uppercase font-bold text-lg text-grey-darkest"
                  for="title"
                >
                  Title
                </label>
                <input
                  class="border border-opacity-75	py-2 px-3 text-grey-darkest font-medium text-xl focus:outline-none"
                  type="text"
                  name="title"
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div class="flex flex-col mb-4">
                <label
                  class="mb-2 uppercase font-bold text-lg text-grey-darkest"
                  for="image"
                >
                  Image
                </label>
                <input
                  class="border border-opacity-75	py-2 px-3 text-grey-darkest font-medium text-xl focus:outline-none"
                  type="file"
                  name="image"
                  id="image"
                />
              </div>
              <div class="flex flex-col mb-4">
                <label
                  class="mb-2 uppercase font-bold text-lg text-grey-darkest"
                  for="content"
                >
                  Content
                </label>
                <textarea
                  class="no-scrollbar border border-opacity-50 py-2 px-3 text-grey-darkest font-medium text-3xl focus:outline-none"
                  type="text"
                  name="content"
                  id="content"
                  rows="15"
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div class="flex flex-col mb-6">
                <label
                  class="mb-2 uppercase font-bold text-lg text-grey-darkest"
                  for="tags"
                >
                  Tags (comma separated)
                </label>
                <input
                  class="border border-opacity-75	py-2 px-3 text-grey-darkest font-medium text-xl focus:outline-none"
                  type="text"
                  name="tags"
                  id="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>
              <div className="flex flex-row">
                <button
                  class="block bg-green-600 hover:bg-green-800  text-white uppercase text-lg mx-auto p-4 rounded"
                  type="draft"
                  onClick={() => {
                    console.log(title, content, image, tags);
                  }}
                >
                  Draft
                </button>
                <button
                  class="block bg-blue-600 hover:bg-blue-800 text-white uppercase text-lg mx-auto p-4 rounded"
                  type="submit"
                  onClick={handleSubmit}
                >
                  publish
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {!isLoggedin && <h1>You are not logged in</h1>}
    </>
  );
}

export default WriteArticle;
