import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import "./components/Header.css";
import { NavBar } from "./components/NavBar";
import { ProductWrapper } from "./components/ProductWrapper";
import { SideBar } from "./components/SIdeBar";

function App() {
  const [searchText, setSearchText] = useState("");

  const searchItem = (item) => {
    setSearchText(item);
  };
  return (
    <>
      <Header searchItem={searchItem} />
      <NavBar />
      <div>
        <SideBar searchItem={searchItem} />
        <ProductWrapper searchText={searchText} />
      </div>
    </>
  );
}

export default App;
