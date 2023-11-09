import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import MyNavbar from "./components/Mynavbar";
import HomePage from "./components/HomePage";
import FavouritePage from "./components/FavouritesPage";
import UpdatePage from "./components/UpdatePage";
import ListBestSellersPage from "./components/ListBestSellersPage";

function App() {
  return (
    <>
      <MyNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/listBestSellers" element={<ListBestSellersPage />}></Route>
          <Route path="/favourites" element={<FavouritePage />}></Route>
          <Route path="/update" element={<UpdatePage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
