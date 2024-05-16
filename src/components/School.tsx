import map from "../assets/hero/map-pin.png";

const School = (props: { period: string, title: string, school: string, last?: boolean }) => {
    return (
        <article className={!props.last ? "mt-12" : ""}>
            <div className="inline-block relative align-top border border-smoky rounded-full bg-zinc-700 w-4 h-4 top-1"></div>
            <div className="inline-block relative left-1">
                <span className={`text-[calc(4.2vw)] min-[425px]:text-base ${props.last ? "text-green-500" : "text-gray-300"}`}>{props.period}</span>
                <h3 className="text-[calc(5vw)] min-[425px]:text-xl">{props.title}</h3>
                <img className="inline-block w-4 align-text-top mr-1" src={map} alt="Map pin icon" />
                <span className="inline-block text-[calc(4.5vw)] min-[425px]:text-lg text-gray-300">{props.school}</span>
            </div>
        </article>
    );
};

export default School;