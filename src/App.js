import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe.js";
import PortfolioContainer from "./components/Portfolio/Portfolio-container";

function App() {
  return (
    <body className="has-navbar-fixed-top">
      <Header />
      <Hero />
      <AboutMe />
      <PortfolioContainer />
      <Footer />
    </body>
  );
}

export default App;