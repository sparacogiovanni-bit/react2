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
      <div className="flex justify-center mt-40">
      
      <span className="loading loading-spinner loading-lg"></span>
      
      </div>
    );
  }
  
  return (
    <div className="p-10 pt-3">
    
    <h1 className="text-4xl font-bold mb-10">
    Lista Posts
    </h1>
    
    <div className="grid gap-5">
    
    {posts &&
      posts.map((post) => (
        
        <div
        key={post.id}
        className="card bg-base-200 shadow-xl"
        >
        
        <div className="card-body">
        
        <h2 className="card-title">
        {post.title}
        </h2>
        
        <p>
        {post.body}
        </p>
        
        <div className="card-actions justify-end">
        
        <Link
        to={`/posts/${post.id}`}
        className="btn btn-primary"
        >
        Vai al dettaglio
        </Link>
        
        </div>
        </div>
        </div>
      ))}
      </div>
      </div>
    );
  }
  
  export default Posts;