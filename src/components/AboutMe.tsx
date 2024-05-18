import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="about-me" className="text-normal max-w-[895px] mx-3 pt-16 md:mx-auto lg:pt-20">
      <h1 className="font-title font-bold text-heading text-[calc(8px+5vw)] drop-shadow-title shadow-title mb-4 ml-2 min-[425px]:text-3xl md:text-[32px] md:ml-8 lg:ml-14">{t('about-me')}</h1>
      <div className="text-[calc(5vw)] mx-1 min-[425px]:text-xl min-[425px]:text-pretty sm:mx-6 md:mx-16 lg:ml-20">
        <p>{t('about-p1')}</p>
        <br />
        {i18n.resolvedLanguage === "en" ?
          <p>My skills range from abstract
            <span className="font-bold font-sub-title drop-shadow-title shadow-highlight"> designs</span> to complex
            <span className="font-bold font-sub-title drop-shadow-title shadow-highlight"> code</span> and robust
            <span className="font-bold font-sub-title drop-shadow-title shadow-highlight"> back-end services</span>, but overall,
            my greatest talent is
            <span className="font-bold font-sub-title drop-shadow-title shadow-highlight"> adaptability</span>,
            although I consider myself an analytical person, I can develop solutions that are also creative.</p> :
          <p>Mis habilidades van desde
            <span className="font-bold font-sub-title drop-shadow-title shadow-highlight"> diseños</span> abstractos hasta
            <span className="font-bold font-sub-title drop-shadow-title shadow-highlight"> código</span> complejo y
            <span className="font-bold font-sub-title drop-shadow-title shadow-highlight"> servicios back-end</span> robustos, pero en general,
            mi mayor talento es la
            <span className="font-bold font-sub-title drop-shadow-title shadow-highlight"> adaptabilidad</span>,
            aunque me considero una persona analítica, puedo desarrollar soluciones que también sean creativas.</p>}

      </div>
    </section>
  );
};

export default AboutMe;