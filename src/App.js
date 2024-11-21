import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostAddPage from "./pages/PostAddPage";
import PostEditPage from "./pages/PostEditPage";
import PostManagePage from "./pages/PostManagePage";
import SignupPage from "./pages/SignupPage";
import SinglePostPage from "./pages/SinglePostPage";
import UserAddPage from "./pages/UserAddPage";
import UserChangePasswordPage from "./pages/UserChangePasswordPage";
import UserEditPage from "./pages/UserEditPage";
import UserManagePage from "./pages/UserManagePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/manage-posts/add" element={<PostAddPage />} />
          <Route path="/manage-posts/edit" element={<PostEditPage />} />
          <Route path="/manage-posts" element={<PostManagePage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="/post" element={<SinglePostPage />} />
          <Route path="/manage-users/add" element={<UserAddPage />} />
          <Route
            path="/manage-users/change-password"
            element={<UserChangePasswordPage />}
          />
          <Route path="/manage-users/edit" element={<UserEditPage />} />
          <Route path="/manage-users" element={<UserManagePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
