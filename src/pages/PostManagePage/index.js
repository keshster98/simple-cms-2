import { Link, useNavigate } from "react-router-dom";

import Badge from "../../components/badge";
import Button from "../../components/button";

function PostManagePage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto my-5" style={{ maxWidth: "700px" }}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="h1">Manage Posts</h1>
        <div className="text-end">
          <Button
            color="blue"
            size="small"
            onClick={(event) => {
              event.preventDefault();
              navigate("/manage-posts/add");
            }}
          >
            Add New Post
          </Button>
        </div>
      </div>
      <div className="card mb-2 p-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col" style={{ width: "40%" }}>
                Title
              </th>
              <th scope="col">Status</th>
              <th scope="col" className="text-end">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">5</th>
              <td>Post 5</td>
              <td>
                <Badge>Pending Review</Badge>
              </td>
              <td className="text-end">
                <div className="buttons">
                  <Button
                    className=" me-2 disabled"
                    color="blue"
                    size="small"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/post");
                    }}
                  >
                    <i className="bi bi-eye"></i>
                  </Button>
                  <Button
                    className=" me-2"
                    color="grey"
                    size="small"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/manage-posts/edit");
                    }}
                  >
                    <i className="bi bi-pencil"></i>
                  </Button>
                  <Button
                    color="red"
                    size="small"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("#");
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Post 4</td>
              <td>
                <Badge>Publish</Badge>
              </td>
              <td className="text-end">
                <div className="buttons">
                  <Button
                    className=" me-2"
                    color="blue"
                    size="small"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/post");
                    }}
                  >
                    <i className="bi bi-eye"></i>
                  </Button>
                  <Button
                    className=" me-2"
                    color="grey"
                    size="small"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/manage-posts/edit");
                    }}
                  >
                    <i className="bi bi-pencil"></i>
                  </Button>
                  <Button
                    color="red"
                    size="small"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("#");
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Post 3</td>
              <td>
                <Badge>Publish</Badge>
              </td>
              <td className="text-end">
                <div className="buttons">
                  <Button
                    className=" me-2"
                    color="blue"
                    size="small"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/post");
                    }}
                  >
                    <i className="bi bi-eye"></i>
                  </Button>
                  <Button
                    className=" me-2"
                    color="grey"
                    size="small"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/manage-posts/edit");
                    }}
                  >
                    <i className="bi bi-pencil"></i>
                  </Button>
                  <Button
                    color="red"
                    size="small"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("#");
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Post 2</td>
              <td>
                <Badge>Publish</Badge>
              </td>
              <td className="text-end">
                <div className="buttons">
                  <Button
                    className=" me-2"
                    color="blue"
                    size="small"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/post");
                    }}
                  >
                    <i className="bi bi-eye"></i>
                  </Button>
                  <Button
                    className=" me-2"
                    color="grey"
                    size="small"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/manage-posts/edit");
                    }}
                  >
                    <i className="bi bi-pencil"></i>
                  </Button>
                  <Button
                    color="red"
                    size="small"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("#");
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Post 1</td>
              <td>
                <Badge>Publish</Badge>
              </td>
              <td className="text-end">
                <div className="buttons">
                  <Button
                    className=" me-2"
                    color="blue"
                    size="small"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/post");
                    }}
                  >
                    <i className="bi bi-eye"></i>
                  </Button>
                  <Button
                    className=" me-2"
                    color="grey"
                    size="small"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/manage-posts/edit");
                    }}
                  >
                    <i className="bi bi-pencil"></i>
                  </Button>
                  <Button
                    color="red"
                    size="small"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("#");
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <Link to="/dashboard" className="btn btn-link btn-sm">
          <i className="bi bi-arrow-left"></i> Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default PostManagePage;
