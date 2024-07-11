import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import About from "./components/About/about";
import Explore from "./components/Explore/explore";
import BetweenAp from "./components/BetweenAp/betweenap";
import Apartments from "./components/Apartments/apartments";
import Testimonials from "./components/Testimonials/testimonials";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import data from "./components/Apartments/data";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 961);
  const [apartments] = useState(data);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 961);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <BetweenAp />
      <section className="cards-list">
        {isMobile ? (
          <div>
            <Apartments
              coverImg={apartments[currentSlide].coverImg}
              title={apartments[currentSlide].title}
              description={apartments[currentSlide].description}
              moreInfoUrl={apartments[currentSlide].moreInfoUrl}
            />
            <div className="dot-navigation">
              {apartments.map((apartment, index) => (
                <span
                  key={index}
                  className={`dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="first-set">
              {apartments.slice(0, 3).map((apartment) => (
                <Apartments
                  key={apartment.id}
                  coverImg={apartment.coverImg}
                  title={apartment.title}
                  description={apartment.description}
                  moreInfoUrl={apartment.moreInfoUrl}
                />
              ))}
            </div>
            <div className="next-set">
              {apartments.slice(3).map((apartment) => (
                <Apartments
                  key={apartment.id}
                  coverImg={apartment.coverImg}
                  title={apartment.title}
                  description={apartment.description}
                  moreInfoUrl={apartment.moreInfoUrl}
                />
              ))}
            </div>
          </>
        )}
      </section>
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
