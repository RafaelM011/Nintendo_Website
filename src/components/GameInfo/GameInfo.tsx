import { gameDataType } from "../../type.d";

type Extract = Pick<gameDataType, "infoHeader" | "information">
interface Props {
    info: Extract;
}

export const GameInfo: React.FC<Props> = ({info}): JSX.Element => {
    const {infoHeader, information} = info;
    
    return(
        <section className="grid grid-cols-2 justify-center items-center w-[1000px] mx-auto mt-32 gap-4">
            <div className="">
                <h2 className="text-main font-bold mb-4 text-2xl"> {infoHeader} </h2>
                <p className="text-main whitespace-pre-line"> {information} </p>
            </div>
            <div className="">
                <img src={require('../../assets/hero.avif')} alt="main" className="w-full"/>
            </div>
        </section>
    )
}