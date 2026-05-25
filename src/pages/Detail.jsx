import { useParams } from "react-router-dom";

import useFetch from "../hooks/useFetch";

function Detail() {
  
  const { id } = useParams();
  
  const {
    data: post,
    loading,
  } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  
  if (loading) {
    return (
      <div className="flex justify-center mt-40">
      <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  
  return (
    <div className="p-10 pt-6">
    
    <h1 className="text-4xl font-bold mb-6">
      Dettaglio post
    </h1>

    <div className="card bg-base-200 shadow-xl">
    
    <div className="card-body">
    
    <h1 className="card-title text-3xl">
    {post.title}
    </h1>
    
    <p className="text-lg">
    {post.body}
    </p>
    
    </div>
    </div>
    </div>
  );
}

export default Detail;