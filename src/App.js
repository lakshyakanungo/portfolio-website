import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ContactBar from "./Components/ContactBar";
import "./App.css";

function App() {
  return (
    <main className="main">
      <Navbar />
      <div className="app_section_container">
        <ContactBar />
      </div>
      <Footer />
    </main>
  );
}

export default App;
