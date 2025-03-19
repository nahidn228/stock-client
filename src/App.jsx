import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className=" ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
