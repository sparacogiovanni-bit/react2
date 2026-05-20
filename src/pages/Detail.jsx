import {
  useLoaderData,
} from "react-router-dom";

function Detail() {
  const post = useLoaderData();
  return (
    <div className="container">

      <h1>
        Dettaglio Post
      </h1>

      <div className="post-card">

        <h2>
          {post.title}
        </h2>

        <p>
          {post.body}
        </p>
      </div>
    </div>
  );
}

export default Detail;