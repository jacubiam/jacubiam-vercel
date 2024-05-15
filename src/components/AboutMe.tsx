const AboutMe = () => {
  return (
    <section id="about-me" className="text-normal max-w-[895px] mx-3 pt-16 md:mx-auto lg:pt-20">
      <h1 className="font-title font-bold text-heading text-[calc(8px+5vw)] drop-shadow-title shadow-title mb-4 ml-2 min-[425px]:text-3xl md:text-[32px] md:ml-8 lg:ml-14">About me</h1>
      <div className="text-[calc(5vw)] mx-1 min-[425px]:text-xl min-[425px]:text-pretty sm:mx-6 md:mx-16 lg:ml-20">
        <p>I'm a web dev from El Salvador, currently studying at Kodigo but ready to get experience in real world scenarios,
          my commitment with the work it's clear and I know I'm ready to collaborate in important projects with amazing teams.</p>
        <br />
        <p>My skills range from abstract
          <span className="font-bold font-sub-title drop-shadow-title shadow-highlight"> designs</span> to complex
          <span className="font-bold font-sub-title drop-shadow-title shadow-highlight"> code</span> and robust
          <span className="font-bold font-sub-title drop-shadow-title shadow-highlight"> back-end services</span>, but overall,
          my greatest talent is
          <span className="font-bold font-sub-title drop-shadow-title shadow-highlight"> adaptability</span>,
          although I consider myself an analytical person, I can develop solutions that are also creative.</p>
      </div>
    </section>
  );
};

export default AboutMe;