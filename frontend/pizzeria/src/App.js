import React, { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import SubmitForm from "./components/SubmitForm";

function App() {
  const [items, setItems] = useState({});
  const [shownSub, setShownSub] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("http://localhost:8000/api/menu");
    const items = await data.json();
    setItems(items);
  };
  console.log(items, items.menu);

  return (
    <div className="App">
      <Navbar shownSub={shownSub} setShownSub={setShownSub} />
      <LandingPage />
      <About />
      <Menu foods={items.menu} />

      {/*  {shownSub && (
        <SubmitForm shownSub={shownSub} setShownSub={setShownSub} />
      )}
      <div className="btnOpen">
        <button onClick={() => setShownSub(!shownSub)}>book a table</button>
      </div> */}

      <Footer />
    </div>
  );
}

export default App;
