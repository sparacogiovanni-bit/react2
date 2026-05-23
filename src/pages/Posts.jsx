import { Link } from "react-router-dom";

import useFetch from "../hooks/useFetch";

function Posts() {
  
  const {
    data: posts,
    loading,
  } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  
  if (loading) {
    
    return (
      <h2 className="container">
        Loading...
      </h2>
    );
  }
  
  return (
    <div className="container">
    
      <h1>
        Lista Posts
      </h1>
    
      <div className="posts-list">
    
        {posts &&
          posts.map((post) => (
        
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
        
              <Link
                to={`/posts/${post.id}`}
              >
                Vai al dettaglio
              </Link>
        
            </div>
          ))}
      </div>
    </div>
  );
}

export default Posts;