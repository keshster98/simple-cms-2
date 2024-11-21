import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="container my-5 mx-auto" style={{ maxWidth: "500px" }}>
      <h1 className="h1 mb-4 text-center">Login</h1>
      <div className="card p-4">
        <form method="GET" action="dashboard.html">
          <div className="mb-2">
            <label for="email" className="visually-hidden">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="email@example.com"
            />
          </div>
          <div className="mb-2">
            <label for="password" className="visually-hidden">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="d-grid">
            <Button
              color="blue"
              onClick={(event) => {
                event.preventDefault();
                navigate("/dashboard");
              }}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
      <div className="d-flex justify-content-between align-items-center gap-3 mx-auto pt-3">
        <Link to="/" className="text-decoration-none small">
          <i className="bi bi-arrow-left-circle"></i> Go back
        </Link>
        <Link to="/signup" className="text-decoration-none small">
          Don't have an account? Sign up here{" "}
          <i className="bi bi-arrow-right-circle"></i>
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
