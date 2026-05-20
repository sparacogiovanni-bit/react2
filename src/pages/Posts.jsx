import { Link, useLoaderData } from "react-router-dom";

function Posts() {
  const posts = useLoaderData();
  return (
    <div className="container">

      <h1>
        Lista Posts
      </h1>

      <div className="posts-list">

        {posts.map((post) => (

          <div
            key={post.id}
            className="post-card"
          >

            <h3>
              {post.title}
            </h3>

            <p>
              {post.body}
            </p>

            <Link to={`/posts/${post.id}`}>
              Vai al dettaglio
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;