import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import "./components/Header.css";
import { NavBar } from "./components/NavBar";
import { Watches } from "./components/Watches";
import { SideBar } from "./components/SIdeBar";
import { Route, Routes } from "react-router-dom";
import { MenShirts } from "./Screens/MenShirts";
import { WomensCasuals } from "./Screens/WomensCasuals";
import { Home } from "./Screens/Home";
import AppContext from "./context/AppContext";
import { LoginModal } from "./components/Login";
import { Furniture } from "./Screens/Furniture";
import { Electroncis } from "./Screens/Electronics";

function App() {
  const [searchText, setSearchText] = useState("");
  const [customerName, setCustomerName] = useState("UpCode ID:");

  const searchItem = (item) => {
    setSearchText(item);
    console.log("type:", searchText);
  };
  return (
    <>
      <AppContext.Provider
        value={{
          customerName: customerName,
          updateCustomerName: setCustomerName,
        }}
      >
        <Header searchItem={searchItem} />
        <LoginModal />
        <NavBar />
        <div>
          <SideBar searchItem={searchText} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Men"
              element={<MenShirts searchText={searchText} />}
            />
            <Route
              path="/Women"
              element={<WomensCasuals searchText={searchText} />}
            />
            <Route
              path="/Watches"
              element={<Watches searchText={searchText} />}
            />
            <Route path="/Furniture" element={<Furniture />} />
            <Route path="/Electronics" element={<Electroncis />} />
            <Route path="/Grocesory/:id" element={<Electroncis />} />
          </Routes>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
