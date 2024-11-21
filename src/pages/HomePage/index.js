import { Link } from "react-router-dom";

import PostCard from "../../components/postcard";

function HomePage() {
  return (
    <div className="container mx-auto my-5" style={{ maxWidth: "500px" }}>
      <h1 className="h1 mb-4 text-center">My Blog</h1>
      <PostCard title="Post 4" text="This is for post 4"></PostCard>
      <PostCard title="Post 3" text="This is for post 3"></PostCard>
      <PostCard title="Post 2" text="This is for post 2"></PostCard>
      <PostCard title="Post 1" text="This is a post"></PostCard>
      <div className="mt-4 d-flex justify-content-center gap-3">
        <Link to="/login" className="btn btn-link btn-sm">
          Login
        </Link>
        <Link to="/signup" className="btn btn-link btn-sm">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
