import Navber from "./component/Navber";
import Footer from "./component/Footer";
import { Route, Routes } from "react-router-dom";
import { Routers } from "./Routers/Routers";
import Moviedetail from "./Pages/Moviedetail";
import { Buttontop } from "./component/Buttontop";

function App() {
  return (
    <div>
      <Navber />

      <Routes>
        <Route path="/" element={<Routers />} />
        <Route path="/trending/:id" element={<Moviedetail />} />
      </Routes>
      <Buttontop />
      <Footer />
    </div>
  );
}

export default App;
