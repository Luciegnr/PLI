import React, { useState } from "react";
import Section from "../Components/Section/Section";
import dummyText from "../DummyText";
import Navbar from "../Components/Navbar/Navbar";
import Carouse from "../Components/Carousel/carousel";
import Footer from "../Components/Footer/Footer";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  localStorage.removeItem('data_doc');
  return (
    <>
      <div className="App">
        <Navbar toggle={toggle} />

        <Carouse/>
        <Section title="FAQ" subtitle={dummyText} dark={true} id="section2" />
        <Section
          title="statistiques d’utilisation"
          subtitle={dummyText}
          dark={false}
          id="section3"
        />
        <Section
          title="Avis d’utilisateur"
          subtitle={dummyText}
          dark={true}
          id="section4"
        />
        <Footer />
      </div>
    </>
  );
}

export default Home;
