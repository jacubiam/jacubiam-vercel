import hero from "../assets/hero/hero-pfp.jpg";
import map from "../assets/hero/map-pin.png";
import github from "../assets/hero/brand-github.png";
import linkedin from "../assets/hero/brand-linkedin.png";
import mail from "../assets/hero/mail.png";
import arrow from "../assets/hero/arrow-big-down-lines-filled.png";

const Hero = () => {
    return (
        <section className="grid grid-cols-1 max-w-[425px] text-normal mx-3 items-center min-[425px]:mx-auto sm:max-w-none sm:mx-3 sm:grid-cols-2 md:grid-cols-5">
            <div className="mx-8 md:justify-self-center md:col-span-2">
                <img className="border border-smoky rounded-3xl my-6 sm:w-56" src={hero} alt="Hero Profile Pic" />
            </div>
            <div className="text-center font-bold md:text-start md:max-w-96 md:col-span-3">
                <h1 className="font-title text-heading text-[calc(14px+5vw)] drop-shadow-title shadow-name min-[425px]:text-4xl min-[425px]:mb-1 md:text-4.5xl md:leading-normal lg:text-5xl lg:mb-2">Joaquin Juarez</h1>
                <h2 className="font-title text-heading text-[calc(8px+5vw)] drop-shadow-title shadow-role mb-3 min-[425px]:text-3xl md:text-[32px]">Web Developer</h2>
                <p className="text-[calc(4vw-1px)] font-medium font-sub-title mb-4 min-[425px]:text-base">Creating meaningful code for the future</p>
                <div className="grid grid-flow-col grid-rows-1 mb-4 justify-center md:justify-start">
                    <img className="justify-self-center w-[calc(5vw)] mr-1 min-[425px]:w-5" src={map} alt="Map Pin" />
                    <p className="text-[calc(4vw)] font-sub-title min-[425px]:text-base sm:text-sm md:text-base">Zacatecoluca, La Paz, El Salvador</p>
                </div>
                <div className="grid grid-cols-6 gap-4 mx-2">
                    <a href="https://github.com/jacubiam" target="_blank">
                        <img className="max-w-11 transition duration-300 hover:scale-110" src={github} alt="Github Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/juarezjoaquin/" target="_blank">
                        <img className="max-w-11 transition duration-300 hover:scale-110" src={linkedin} alt="LinkedIn Icon" />
                    </a>
                    <a href="mailto:joaquinjuarez17@hotmail.com" target="_blank">
                        <img className="max-w-11 transition duration-300 hover:scale-110" src={mail} alt="Mail Icon" />
                    </a>
                    <a href="#" target="_blank" className="border border-smoky rounded-xl col-span-3 grid grid-flow-col justify-evenly items-center py-2 px-1 hover:scale-105">
                        <span className="text-[calc(4vw-1px)] min-[425px]:text-base sm:text-sm md:text-base">Download CV</span>
                        <img className="w-[calc(4vw)] min-[425px]:w-5" src={arrow} alt="Arrow Icon" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;