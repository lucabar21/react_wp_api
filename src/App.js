import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import MainSectionComponent from "./components/MainSectionComponent";
import FooterComponent from "./components/FooterComponent";
import AboutComponent from "./components/AboutComponent";
import ContactsComponent from "./components/ContactsComponent";
import BlogComponent from "./components/BlogComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<MainSectionComponent />}></Route>
          <Route path="/about" element={<AboutComponent />}></Route>
          <Route path="/contact" element={<ContactsComponent />}></Route>
          <Route path="/blog" element={<BlogComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
