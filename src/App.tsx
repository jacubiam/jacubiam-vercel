import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {

  return (
    <>
      <Header />
      {/* Temporary pb-8*/}
      <main className="bg-radial border border-smoky rounded-[40px] mx-3 my-4 pb-8 lg:max-w-screen-lg lg:mx-auto">
        <Hero/>
      </main>
    </>
  );
}

export default App;
