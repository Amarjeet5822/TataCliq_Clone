import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Section from "./MainContent/Section";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />  
    </>
  )
}

export default App;
