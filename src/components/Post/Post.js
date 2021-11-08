import React from "react";
import { useParams } from "react-router";
import Comments from "../Comments/Comments";
import Meta from "../Helmet/Meta";
function Post() {
  React.useEffect(() => {
    console.log("Post component is rendered");
  }, []);
  const id = useParams();
  console.log(id);
  return (
    <>
      <Meta title={id.id} />
      <h1>Post {id.id}</h1>
      <Comments />
    </>
  );
}

export default Post;
