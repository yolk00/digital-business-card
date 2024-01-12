import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="center noise">
      <div className="border">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}
