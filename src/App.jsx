import { Card } from "./components/card/Card";
import "./App.scss";
import { Navbar } from "./components/navbar/Navbar";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Button } from "./components/button/Button";

function App() {
  

  return (
    <>
      <div className="app">
        <Header />
        <Card />
        <Navbar />
        <div className="btn">
        <Button props={"Buy BTC"} color={"#FC2E9C"} />
        <Button props={"Sell BTC"} color={"#1C7EF2"} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
