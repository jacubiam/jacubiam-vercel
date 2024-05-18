import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  //Translation vars
  const { t, i18n } = useTranslation();

  //isOpen family is used to check if a animated menu is active
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLang, setIsOpenLang] = useState(false);
  const [isOpenLangHam, setIsOpenLangHam] = useState(false);

  //Reference to different elements
  const headerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const langHamburgerRef = useRef<HTMLDivElement>(null);
  const droplangRef = useRef<HTMLDivElement>(null);
  const droplangHamburgerRef = useRef<HTMLDivElement>(null);

  //Listen if a click is outside of the menu when is open
  document.addEventListener("click", (e) => {
    //Hamburger menu Refs
    const header = headerRef.current;
    const nav = navRef.current;
    const menuBtn = menuRef.current;

    //Dropdown Refs
    const dropLang = langRef.current;
    const dropLangHamburger = langHamburgerRef.current;
    const langBtn = droplangRef.current;
    const langBtnHam = droplangHamburgerRef.current;

    //Event checkers
    const isInsideMenu = menuBtn?.contains(e.target as Node);
    const isInsideLang = langBtn?.contains(e.target as Node);
    const isInsideLangHam = langBtnHam?.contains(e.target as Node);

    //Check when the click is outside the dropdown (desktop edition)
    if (!isInsideLang) {
      dropLang?.classList.replace('animate-language', 'animate-language-close');
      setTimeout(() => {
        dropLang?.classList.replace('block', 'hidden');
      }, 300);
      setIsOpenLang(false);
    }

    //Check when the click is outside the hamburger menu and/or outside the dropdown (small edition)
    if (!isInsideMenu && !isInsideLangHam) {
      //If the dropdown menu is active, just close it onclick
      if (dropLangHamburger?.offsetParent) {
        dropLangHamburger?.classList.replace('animate-language', 'animate-language-close');
        setTimeout(() => {
          dropLangHamburger?.classList.replace('block', 'hidden');
        }, 300);
        setIsOpenLangHam(false);
      } else {
        //If the dropdown menu is NOT active, close the hamburger menu
        header?.classList.remove('rounded-br-none');
        nav?.classList.add('animate-hamburger-close');
        setTimeout(() => {
          nav?.parentElement?.classList.replace('block', 'hidden');
        }, 300);
        setIsOpen(false);
      }
    }
  });

  //Listen if the screen is bigger or equal to Tablet, if so reset the dropdown language
  const mqTablet = window.matchMedia('(min-width:768px)');
  mqTablet.addEventListener('change', () => {
    if (mqTablet.matches) {
      const dropLang = langRef.current;
      const dropLangHamburger = langHamburgerRef.current;

      setIsOpenLangHam(false);
      setIsOpenLang(false);
      dropLang?.classList.replace('block', 'hidden');
      dropLangHamburger?.classList.replace('block', 'hidden');
    }
  });

  //Listen if the screen is bigger than or equal to Desktop, if so reset all the hamburger menu
  const mqDesktop = window.matchMedia('(min-width:1024px)');
  mqDesktop.addEventListener("change", () => {
    if (mqDesktop.matches) {
      const header = headerRef.current;
      const nav = navRef.current;
      setIsOpen(false);
      header?.classList.remove('rounded-br-none');
      nav?.parentElement?.classList.replace('block', 'hidden');
    }
  });

  //Menu handler
  const handleMenu = () => {
    const header = headerRef.current;
    const dropHamburger = langHamburgerRef.current;
    const nav = navRef.current;

    //Remove classes if the hamburger menu is open
    if (isOpen) {

      //If the dropdown component is open during the closing event, just restore it
      if (dropHamburger?.offsetParent) {
        dropHamburger?.classList.replace('animate-language', 'animate-language-close');
        dropHamburger?.classList.replace('block', 'hidden');
        setIsOpenLangHam(false);
      }

      header?.classList.remove('rounded-br-none');
      nav?.classList.add('animate-hamburger-close');
      setTimeout(() => {
        nav?.parentElement?.classList.replace('block', 'hidden');
      }, 300);
      setIsOpen(false);
    } else {
      header?.classList.add('rounded-br-none');
      nav?.classList.replace('animate-hamburger-close', 'animate-hamburger');
      setTimeout(() => {
        nav?.classList.remove('animate-hamburger');
      }, 300);
      nav?.parentElement?.classList.replace('hidden', 'block');
      setIsOpen(true);
    }
  };

  //Dropdown menu for language (desktop)
  const handleLanguage = () => {
    const dropLang = langRef.current;

    if (isOpenLang) {
      dropLang?.classList.replace('animate-language', 'animate-language-close');
      setTimeout(() => {
        dropLang?.classList.replace('block', 'hidden');
      }, 300);
      setIsOpenLang(false);
    } else {
      dropLang?.classList.replace('hidden', 'block');
      dropLang?.classList.replace('animate-language-close', 'animate-language');
      setIsOpenLang(true);
    }

  };

  //Dropdown menu for language (small)
  const handleLanguageHam = () => {
    const dropLangHamburger = langHamburgerRef.current;

    if (isOpenLangHam) {
      dropLangHamburger?.classList.replace('animate-language', 'animate-language-close');
      setTimeout(() => {
        dropLangHamburger?.classList.replace('block', 'hidden');
      }, 300);
      setIsOpenLangHam(false);
    } else {
      dropLangHamburger?.classList.replace('hidden', 'block');
      dropLangHamburger?.classList.replace('animate-language-close', 'animate-language');
      setIsOpenLangHam(true);
    }
  };

  //Language swaper handler
  const handleLangSwap = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const lang = event.target as HTMLButtonElement;
    if (lang.id === "es") {
      i18n.changeLanguage("es");
      history.pushState({}, "", '/es');
    } else {
      history.pushState({}, "", '/');
      i18n.changeLanguage("en");
    }
  };

  return (
    <header className="z-10 fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-screen-xl px-1">
      <div ref={headerRef} className="bg-radial border border-smoky rounded-br-[40px] rounded-bl-[40px] transition-[border-bottom-right-radius] ease-linear duration-300">
        <div className="flex flex-wrap justify-between mx-8 items-center h-11 lg:h-14 md:mx-16">
          <a href="#home" className="font-title font-bold text-heading text-xl drop-shadow-title shadow-title md:text-2xl lg:text-[32px]">
            Sublime Page</a>
          <div className="grid grid-flow-col items-center w-2/3">
            <nav className="hidden lg:flex">
              <div className="font-title font-bold text-heading shadow-title text-base xl:text-lg">
                <a href="#about-me" className="drop-shadow-title mr-8">{t('about-me')}</a>
                <a href="#education" className="drop-shadow-title mr-8">{t('education')}</a>
                <a href="#projects" className="drop-shadow-title mr-8">{t('projects')}</a>
                <a href="#skills" className="drop-shadow-title mr-8">{t('skills')}</a>
              </div>
            </nav>
            <div className="justify-self-end  flex flex-wrap items-center">
              <div className="hidden shadow-title font-title font-bold text-heading shadow-title text-xl md:inline md:mr-16 lg:mr-0">
                <div onClick={handleLanguage} ref={droplangRef}>
                  <span className="cursor-default select-none drop-shadow-title mr-1">{i18n.resolvedLanguage === "en" ? t('english') : t('spanish')}</span>
                  {isOpenLang ?
                    <span className="cursor-default select-none text-base drop-shadow-title">&#x25B3;</span>
                    :
                    <span className="cursor-default select-none text-base drop-shadow-title">&#x25BD;</span>
                  }
                </div>
                <div ref={langRef} className="-z-10 hidden absolute top-[-80%] bg-radial border border-smoky rounded-md text-lg animate-language p-1 pr-6 mt-1 lg:mt-6">
                  <button id="en" className="block drop-shadow-title select-none shadow-title mb-4" onClick={handleLangSwap}>{t('english')}</button>
                  <button id="es" className="block drop-shadow-title select-none shadow-title" onClick={handleLangSwap}>{t('spanish')}</button>
                </div>
              </div>
              <div className="lg:hidden" onClick={handleMenu} ref={menuRef}>
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
      </div>
      <nav className="hidden lg:hidden w-fit absolute right-0 mr-1">
        <div ref={navRef} className="bg-radial border-x border-b border-smoky rounded-br-[20px] rounded-bl-[20px] font-title font-bold text-heading animate-hamburger shadow-title p-4 md:p-8">
          <a href="#about-me" className="block drop-shadow-title mb-2 md:mb-4">{t('about-me')}</a>
          <a href="#education" className="block drop-shadow-title mb-2 md:mb-4">{t('education')}</a>
          <a href="#projects" className="block drop-shadow-title mb-2 md:mb-4">{t('projects')}</a>
          <a href="#skills" className="block drop-shadow-title mb-2 md:mb-0">{t('skills')}</a>
          <div className="md:hidden shadow-title shadow-title">
            <div onClick={handleLanguageHam} ref={droplangHamburgerRef}>
              <span className="cursor-default select-none drop-shadow-title mr-1">{i18n.resolvedLanguage === "en" ? t('english') : t('spanish')}</span>
              {isOpenLangHam ?
                <span className="cursor-default select-none text-base drop-shadow-title">&#x25B3;</span>
                :
                <span className="cursor-default select-none text-base drop-shadow-title">&#x25BD;</span>
              }
            </div>
            <div ref={langHamburgerRef} className="-z-10 hidden absolute left-0 -bottom-[2px] bg-radial border border-smoky rounded-md animate-language p-4 pr-6 mt-1 lg:mt-6">
              <a href="/" className="block drop-shadow-title mb-4">{t('english')}</a>
              <a href="/es" className="block drop-shadow-title">{t('spanish')}</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;