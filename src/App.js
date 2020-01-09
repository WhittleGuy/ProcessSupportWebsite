import React from "react";

import "./styles/App.scss";

import Nav from "./js/components/nav";
import Main from "./js/main";
import Footer from "./js/components/footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
