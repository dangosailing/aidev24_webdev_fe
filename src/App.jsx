import "./styles/base.css";
import "./styles/responsive.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProvider from "./contexts/UserContext";
import PathProvider from "./contexts/PathContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PathMaker from "./pages/PathMaker";
import Account from "./pages/Account";
import UserPaths from "./pages/UserPaths";
import ServerMessage from "./components/serverMessage";

function App() {
  return (
    <UserProvider>
      <PathProvider>
        <Router>
          <Header />
          <ServerMessage />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="create-path" element={<PathMaker />} />
            <Route path="account" element={<Account />} />
            <Route path="profile" element={<Profile />} />
            <Route path="user-paths" element={<UserPaths />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </Router>
      </PathProvider>
    </UserProvider>
  );
}

export default App;
