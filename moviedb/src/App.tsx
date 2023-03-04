import Navber from "./component/Navber";
import Moviewshow from "./Pages/Moviewshow";
import Footer from "./component/Footer";
import { Searchbar } from "./component/Searchbar";
import { ApiImage } from "./component/ApiImage";

import axios from "axios";
import { Search } from "./Search";
import Trending from "./component/Trending";

function App() {
  return (
    <div>
      <Navber />
      <Searchbar />
      {/* <Trending /> */}
      <Moviewshow />
      <ApiImage />
      {/* <Search/> */}
      <Footer />
    </div>
  );
}

export default App;
