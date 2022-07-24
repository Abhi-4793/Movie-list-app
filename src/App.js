import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Watched from "./component/Watched";
import Watchlist from "./component/Watchlist";
import Add from "./component/Add";
import Header from "./component/Header";
import Favourite from "./component/Favourite";
import "./lib/font-awesome/css/all.min.css";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
import Trending from "./component/Trending";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Trending />}></Route>
          <Route exact path="/trending" element={<Trending />}></Route>
          <Route exact path="/watchlist" element={<Watchlist />}></Route>
          <Route exact path="/favourite" element={<Favourite />}></Route>
          <Route path="/Watched" element={<Watched />}></Route>
          <Route path="/Add" element={<Add />}></Route>
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
