import { Link, useNavigate } from "react-router-dom";

import Badge from "../../components/badge";
import Button from "../../components/button";

function UserManagePage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto my-5" style={{ maxWidth: "700px" }}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="h1">Manage Users</h1>
        <div className="text-end">
          <Button
            color="blue"
            size="small"
            onClick={(event) => {
              event.preventDefault();
              navigate("/manage-users/add");
            }}
          >
            Add New User
          </Button>
        </div>
      </div>
      <div className="card mb-2 p-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col" className="text-end">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">3</th>
              <td>Jack</td>
              <td>jack@gmail.com</td>
              <td>
                <Badge>User</Badge>
              </td>
              <td className="text-end">
                <div className="buttons">
                  <Button
                    className=" me-2"
                    color="green"
                    size="small"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/manage-users/edit");
                    }}
                  >
                    <i className="bi bi-pencil"></i>
                  </Button>
                  <Button
                    className=" me-2"
                    color="yellow"
                    size="small"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/manage-users/change-password");
                    }}
                  >
                    <i className="bi bi-key"></i>
                  </Button>
                  <Button
                    className=" me-2"
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
              <td>Jane</td>
              <td>jane@gmail.com</td>
              <td>
                <Badge>Editor</Badge>
              </td>
              <td className="text-end">
                <div className="buttons">
                  <Button
                    className=" me-2"
                    color="green"
                    size="small"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/manage-users/edit");
                    }}
                  >
                    <i className="bi bi-pencil"></i>
                  </Button>
                  <Button
                    className=" me-2"
                    color="yellow"
                    size="small"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/manage-users/change-password");
                    }}
                  >
                    <i className="bi bi-key"></i>
                  </Button>
                  <Button
                    className=" me-2"
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
              <td>John</td>
              <td>john@gmail.com</td>
              <td>
                <Badge>Admin</Badge>
              </td>
              <td className="text-end">
                <div className="buttons">
                  <Button
                    className=" me-2"
                    color="green"
                    size="small"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/manage-users/edit");
                    }}
                  >
                    <i className="bi bi-pencil"></i>
                  </Button>
                  <Button
                    className=" me-2"
                    color="yellow"
                    size="small"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/manage-users/change-password");
                    }}
                  >
                    <i className="bi bi-key"></i>
                  </Button>
                  <Button
                    className=" me-2"
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

export default UserManagePage;
