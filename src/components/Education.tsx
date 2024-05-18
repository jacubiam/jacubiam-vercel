import { useTranslation } from "react-i18next";
import School from "./School";

const Education = () => {
    const { t } = useTranslation();

    return (
        <section id="education" className="text-normal max-w-[895px] mx-3 pt-16 md:mx-auto lg:pt-20">
            <h1 className="font-title font-bold text-heading text-[calc(8px+5vw)] drop-shadow-title shadow-title mb-4 ml-2 min-[425px]:text-3xl md:text-[32px] md:ml-8 lg:ml-14">{t('education')}</h1>
            <div className="relative sm:mx-6 md:mx-16 lg:mx-20">
                <div className="absolute justify-self-start bg-zinc-200 w-2 top-2 left-1 h-4/6"></div>
                <School period="2023 - 2024" title={t('education-kodigo')} school="Kodigo Bootcamp" last />
                <School period="2020 - 2022" title={t('education-ues')} school="Universidad de El Salvador" />
            </div>
        </section>
    );
};

export default Education;