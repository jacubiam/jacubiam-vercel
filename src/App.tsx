import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "./i18n";

function App() {
  const { i18n } = useTranslation();
  
  useEffect(() => {
    const userLang = navigator.language;
    if (userLang.includes("es")) {
      i18n.changeLanguage('es');
      history.pushState({}, "", '/es');
    }
  }, [i18n]);

  return (
    <>
      <Header />
      <main id="home" className="pt-16 lg:pt-20">
        <div className="bg-radial border border-smoky rounded-[40px] mx-3 pb-8 lg:max-w-[900px] lg:mx-auto">
          <Hero />
          <AboutMe />
          <Education />
          <Projects />
          <Skills />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
