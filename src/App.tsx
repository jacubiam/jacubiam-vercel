import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {

  return (
    <>
      <Header />
      {/* Temporary pb-8*/}
      <main id="home" className="pt-16 lg:pt-20">
        <div className="bg-radial border border-smoky rounded-[40px] mx-3 pb-8 lg:max-w-screen-lg lg:mx-auto">
          <Hero />

        </div>
      </main>
    </>
  );
}

export default App;
