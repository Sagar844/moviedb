import Navber from "./component/Navber";
import Footer from "./component/Footer";
import { Route, Routes } from "react-router-dom";
import { Routers } from "./Routers/Routers";
import Moviedetail from "./Pages/Moviedetail";
import { ApiImage } from "./component/ApiImage";
import { Searchapi } from "./Pages/Searchapi";

function App() {
  return (
    <div>
      
      <Navber />
      <Routes>
        <Route path="/" element={<Routers />} />
        <Route path="/trending/:id" element={<Moviedetail />} />
      </Routes>
      <Footer />


    </div>
  );
}

export default App;
