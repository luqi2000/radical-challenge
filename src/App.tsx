import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import MyNavbar from "./components/Mynavbar";
import HomePage from "./components/HomePage";
import ListBestSellers from "./components/ListBestSellersPage";
import FavouritePage from "./components/FavouritesPage";
import UpdatePage from "./components/UpdatePage";

function App() {
  return (
    <>
      <MyNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/listBestSellers" element={<ListBestSellers />}></Route>
          <Route path="/favourites" element={<FavouritePage />}></Route>
          <Route path="/update" element={<UpdatePage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
