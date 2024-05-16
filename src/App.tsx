import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {

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
