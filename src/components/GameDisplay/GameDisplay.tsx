import { type gameDataType } from "../../type.d";
import ERating from "../../assets/E10plus.svg";
import { GameImages } from "./GameImages";

type Extract = Pick<gameDataType, "title" | "price" | "urls">;

type Props = {
    gameData: Extract;
}

export const GameDisplay: React.FC<Props> = ({gameData}): JSX.Element => {
    const {title, price, urls} = gameData;

    return(
        <section className=" bg-[#D6F0FA] pt-12 max-[1200px]:pt-0 relative">
            <div className="bg-white w-[1200px] max-[1200px]:w-full mx-auto shadow-[0px_0px_15px_8px_rgba(0,0,0,0.3)] flex flex-col md:flex-row justify-center pb-4">
                 <div className="h-full w-12/12 md:w-7/12 md:px-12 px-4 pt-8">
                    <header className="flex gap-2 pb-4 text-sm text-main">
                        <p> Store </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="Breadcrumbsstyles__StyledChevronRightIcon-sc-sjz6t7-3 jpVOeu" width="10" role="presentation" data-testid="ChevronRightIcon" color="#dadada"><path fillRule="evenodd" clipRule="evenodd" fill="#dadada" d="M5.3 4.3L9.8 0l16.9 16L9.8 32l-4.5-4.3L17.7 16z"></path></svg>
                        <p> Games </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="Breadcrumbsstyles__StyledChevronRightIcon-sc-sjz6t7-3 jpVOeu" width="10" role="presentation" data-testid="ChevronRightIcon" color="#dadada"><path fillRule="evenodd" clipRule="evenodd" fill="#dadada" d="M5.3 4.3L9.8 0l16.9 16L9.8 32l-4.5-4.3L17.7 16z"></path></svg>
                        <p> Stardew Valley </p>
                    </header>
                    <main className="flex flex-col justify-between relative">
                        <GameImages images={urls}/>
                    </main>
                    <footer className="py-4 hidden md:flex md:visible">
                        <img src={ERating} alt="E rating guide"/> 
                        <div className="text-main text-sm">
                            <p className="py-1 border-main border-b-2"> Fantasy violence, Use of Alcoho, Use of Tobacco, Simulated Gambling, Mild Language, Mild Blood</p> 
                            <p className="py-1"> Users Interact </p>         
                        </div>              
                    </footer>
                 </div>
                 <div className="h-full w-12/12 md:w-5/12 md:px-12 px-4 md:pt-16 pt-10">
                    <h6 className="border-secundary border-l-[3px] pl-2 text-main"> Nintendo Switch </h6>
                    <h1 className="text-3xl text-[#555555] mt-9 font-semibold"> {title}</h1>
                    <h1 className="text-3xl text-[#555555] mt-9 font-semibold"> ${price} </h1>
                    <p className="mt-6 text-xs"> Eligible for up to <b>75</b> Gold Points </p>
                    <button
                        id='download_button' 
                        className="bg-secundary w-full h-16 text-white text-2xl rounded-md mt-6 hover:scale-110 transition duration-200 hover:bg-red-700"
                    > 
                        Direct download 
                    </button>
                    <p className="text-xs mt-6" > This item will be sent to your system automatically after purchase. </p>
                 </div>
            </div>
        </section>
    )
}