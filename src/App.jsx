import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import NotFound from "./NotFound ";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="services" element={<Services />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Route>

          <Route path="*" element={<NotFound />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
