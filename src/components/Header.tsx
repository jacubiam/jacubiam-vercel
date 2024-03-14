import { useRef, useState } from "react";

const Header = () => {
  //isOpen is used to handle the state of the hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const userLanguages = navigator.language;
  console.log(`User's preferred language: ${userLanguages}`);

  const handleClick = () => {
    const header = headerRef.current;
    const nav = navRef.current;

    //Remove classes based on the state of isOpen
    if (isOpen) {
      header?.classList.remove('rounded-br-none');
      nav?.classList.replace('animate-hamburger', 'animate-hamburger-close');
      setTimeout(() => {
        nav?.parentElement?.classList.replace('block', 'hidden');
      }, 300);
      setIsOpen(false);
    } else {
      header?.classList.add('rounded-br-none');
      nav?.classList.replace('animate-hamburger-close', 'animate-hamburger');
      nav?.parentElement?.classList.replace('hidden', 'block');
      setIsOpen(true);
    }
  };

  //Check if the screen is bigger than or equal to Tablet, if so reset all the hamburger menu
  const mq = window.matchMedia('(min-width:1024px)');
  mq.addEventListener("change", () => {
    const header = headerRef.current;
    const nav = navRef.current;
    if (mq.matches) {
      setIsOpen(false);
      header?.classList.remove('rounded-br-none');
      nav?.parentElement?.classList.replace('block', 'hidden');
    }
  });

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-10 overflow-hidden max-w-screen-xl px-1">
      <div ref={headerRef} className="bg-radial border border-smoky rounded-br-[40px] rounded-bl-[40px] transition-[border-bottom-right-radius] ease-linear duration-300">
        <div className="flex flex-wrap justify-between mx-8 items-center h-11 lg:h-14 md:mx-16">
          <a href="#home" className="font-title font-bold text-heading text-xl drop-shadow-title shadow-title md:text-2xl lg:text-[32px]">
            Sublime Page</a>
          <nav className="hidden lg:flex">
            <div className="font-title font-bold text-heading shadow-title text-xl">
              <a href="#" className="drop-shadow-title mr-8">About Me</a>
              <a href="#" className="drop-shadow-title mr-8">Projects</a>
              <a href="#" className="drop-shadow-title mr-16">Skills</a>
              <select className="bg-transparent drop-shadow-title shadow-title" name="lang" id="language">
                <option className="bg-[#444F6F] drop-shadow-title shadow-title" value="en">English (US)</option>
                <option className="bg-[#444F6F] drop-shadow-title shadow-title" value="es">Español (LA)</option>
              </select>
            </div>
          </nav>
          <div className="flex flex-wrap items-center lg:hidden">
            <a href="#" className="hidden md:inline font-title font-bold text-heading shadow-title drop-shadow-title mr-16">English (US)</a>
            <div onClick={handleClick}>
              {isOpen ?
                <div className="font-title font-bold text-normal text-[28px] tracking-widest cursor-default select-none leading-7 w-7 h-7 text-center drop-shadow-title shadow-title">
                  X
                </div>
                :
                <div className="font-title font-bold text-normal text-2xl tracking-widest cursor-default select-none rotate-90 drop-shadow-title shadow-hamburger">
                  |||
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      <nav className="hidden lg:hidden w-fit relative left-[100%]">
        <div ref={navRef} className="bg-radial border-x border-b border-smoky rounded-br-[20px] rounded-bl-[20px] font-title font-bold text-heading animate-hamburger shadow-title p-4 md:p-8">
          <a href="#" className="block drop-shadow-title mb-2 md:mb-4">About Me</a>
          <a href="#" className="block drop-shadow-title mb-2 md:mb-4">Projects</a>
          <a href="#" className="block drop-shadow-title mb-2 md:mb-4">Skills</a>
          <select className="bg-transparent drop-shadow-title shadow-title" name="lang" id="language">
            <option className="bg-[#444F6F] drop-shadow-title shadow-title" value="en">English (US)</option>
            <option className="bg-[#444F6F] drop-shadow-title shadow-title" value="es">Español (LA)</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Header;