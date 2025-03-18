import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-11/12 mx-auto min-h-screen ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
