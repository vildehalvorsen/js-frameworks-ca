import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/layout/Nav";
import HomePage from "./pages/home/HomePage";
import DetailPage from "./pages/details/DetailPage";
import ContactPage from "./pages/contact/ContactPage";
import LogInPage from "./pages/login/LogInPage";
import AdminPage from "./pages/admin/AdminPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Nav />

        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/detail/:param" element={<DetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
