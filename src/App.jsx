import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProvider from './contexts/UserContext';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";
import GetUserPosition from "./pages/GetUserPosition";
import Account from "./pages/Account";

function App() {
  return (
    <UserProvider>
      <Router>
        <div>
          <h1>Test: This is rendering</h1>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="location" element={<GetUserPosition/>} />
          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<Account />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
