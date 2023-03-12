import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import DashboardUser from "./Pages/DashboardUser";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/dash" exact element={<Dashboard />} />
          <Route path="/dash/user/:id" exact element={<DashboardUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
