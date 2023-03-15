import Navber from "./component/Navber";
import Footer from "./component/Footer";
import { Route, Routes } from "react-router-dom";
import { Routers } from "./Routers/Routers";
import Moviedetail from "./Pages/Moviedetail";

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
