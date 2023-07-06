import { useState } from "react";
import { gameDataType } from "../../type.d";

type Extract = Pick<gameDataType, "infoHeader" | "information">
interface Props {
    info: Extract;
}

export const GameInfo: React.FC<Props> = ({info}): JSX.Element => {
    const {infoHeader, information} = info;
    const [height, setHeight] = useState<'h-[280px]' | 'h-fit'>('h-[280px]')
    
    return(
        <section className="flex flex-col md:flex-row justify-center items-center w-full max-w-[1000px] mx-auto mt-20 md:mt-24 gap-4 px-4">
            <div className="basis-1/2">
                <h2 className="text-main font-bold mb-4 text-2xl"> {infoHeader} </h2>
                <p className={`text-main whitespace-pre-line ${height} overflow-hidden`}> {information} </p>
                <br/>
                <button 
                    onClick={() => setHeight(() => height === 'h-fit' ? 'h-[280px]' : 'h-fit')} 
                    className="text-secundary font-bold hover:text-red-700"
                >
                    {height === 'h-fit' ? 'Read less' : 'Read more'}
                </button>
                <p className="text-xs text-main">
                Software description provided by the publisher.
                </p>
                <button className="bg-secundary w-8/12 h-12 text-white font-semibold rounded-md mt-6 hover:scale-110 transition duration-200 hover:bg-red-700"> 
                Explore this game is oficial website 
                </button>
            </div>
            <div className="basis-1/2 self-center">
                <img src={require('../../assets/hero.avif')} alt="main" className="w-full"/>
            </div>
        </section>
    )
}