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
        <Button props={"Buy BTC"} color={["#18BBFA", "#1C7EF2"]} />
        <Button props={"Sell BTC"} color={["#FE5D82", "#FC2E9C"]} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
