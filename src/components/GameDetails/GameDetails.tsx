import { gameDataType } from "../../type.d";
import ERating from "../../assets/E10plus.svg";


type Extract = Pick<gameDataType, "details">
type Props = {
    detail: Extract;
}

export const GameDetails: React.FC<Props> = ({detail}): JSX.Element => {
    const {details} = detail;
    
    return (
        <>
            <section className="w-full max-w-[1000px] h-[200[x] flex flex-col md:flex-row gap-8 mx-auto justify-between mt-20 px-4">
                <div className="bg-[#F8F8F8] h-[200px] md:w-6/12 w-full">
                    <h1 className="text-center font-bold py-6"> ESRB rating </h1>
                    <div className="flex gap-4 bg-white w-10/12 mx-auto p-4 shadow-[0px_0px_10px_5px_rgba(0,0,0,0.3)]">
                        <img src={ERating} alt="E rating guide" className="w-[50px]"/> 
                        <div className="text-main text-xs">
                            <p className="py-1 border-main border-b-2"> Fantasy violence, Use of Alcoho, Use of Tobacco, Simulated Gambling, Mild Language, Mild Blood</p> 
                            <p className="py-1"> Users Interact </p>         
                        </div>  
                    </div>
                </div>
                <div className="bg-[#F8F8F8] h-[200px] md:w-6/12 w-full">
                    <h1 className="text-center font-bold py-6 text-[#484848]"> Supported play modes </h1>
                    <div className="flex gap-4 justify-center">
                        <div className="bg-[#484848] w-3/12 h-[80px] relative">
                            <p className="text-[#484848] text-center font-bold absolute left-0 right-0 -bottom-8"> TV </p>                            
                        </div>
                        <div className="bg-[#484848] w-3/12 h-[80px] relative">
                            <p className="text-[#484848] text-center font-bold absolute left-0 right-0 -bottom-8"> Tabletop </p>                            
                        </div>
                        <div className="bg-[#484848] w-3/12 h-[80px] relative">
                            <p className="text-[#484848] text-center font-bold absolute left-0 right-0 -bottom-8"> Handleheld </p>                            
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-[1000px] h-[500px] grid grid-rows-[repeat(8,1fr)] mx-auto mt-10 px-4">
                <div className="border-main border-t-2 grid grid-cols-[28px_1fr] py-3">
                    <img className="col-start-1 col-span-1" alt=""/>
                    <div className="col-start-2 col-end-2 grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr,2fr] grid self-center">
                        <h1 className="text-[#484848] font-semibold text-left my-auto"> Release Date </h1>
                        <p className="text-[#484848] text-left my-auto"> {details.release_date} </p>                        
                    </div>
                </div>
                <div className="border-main border-t-2 grid grid-cols-[28px_1fr] py-3">
                    <img className="col-start-1 col-span-1" alt=""/>
                    <div className="col-start-2 col-end-2 grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr,2fr] grid self-center">
                        <h1 className="text-[#484848] font-semibold text-left my-auto"> No. of players </h1>
                        <div className="flex gap-4">
                            <p className="text-secundary text-left font-semibold border-b-2 border-secundary my-auto cursor-pointer"> {details.no_of_players.single_system} </p>
                            <p className="text-secundary text-left font-semibold border-b-2 border-secundary my-auto cursor-pointer"> {details.no_of_players.local_wireless} </p>
                            <p className="text-secundary text-left font-semibold border-b-2 border-secundary my-auto cursor-pointer"> {details.no_of_players.online} </p>
                        </div>
                    </div>
                </div>
                <div className="border-main border-t-2 grid grid-cols-[28px_1fr] py-3">
                    <img className="col-start-1 col-span-1" alt=""/>
                    <div className="col-start-2 col-end-2 grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr,2fr] grid self-center">
                        <h1 className="text-[#484848] font-semibold text-left my-auto"> Genre </h1>
                        <div className="flex gap-4">
                            <p className="text-secundary text-left font-semibold border-b-2 border-secundary my-auto cursor-pointer"> {details.genre.role_playing} </p>
                            <p className="text-secundary text-left font-semibold border-b-2 border-secundary my-auto cursor-pointer"> {details.genre.simulation} </p>
                        </div>
                    </div>
                </div>
                <div className="border-main border-t-2 grid grid-cols-[28px_1fr] py-3">
                    <img className="col-start-1 col-span-1" alt=""/>
                    <div className="col-start-2 col-end-2 grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr,2fr] grid self-center">
                        <h1 className="text-[#484848] font-semibold text-left my-auto"> Publisher </h1>
                        <p className="text-secundary font-semibold text-left my-auto border-b-2 border-secundary cursor-pointer w-fit"> {details.publisher} </p>
                    </div>
                </div>
                <div className="border-main border-t-2 grid grid-cols-[28px_1fr] py-3">
                    <img className="col-start-1 col-span-1" alt=""/>
                    <div className="col-start-2 col-end-2 grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr,2fr] grid self-center">
                        <h1 className="text-[#484848] font-semibold text-left my-auto"> ESRB rating </h1>
                        <p className="text-secundary font-semibold text-left my-auto border-b-2 border-secundary cursor-pointer w-fit"> {details.ESRB_rating} </p>
                    </div>
                </div>
                <div className="border-main border-t-2 grid grid-cols-[28px_1fr] py-3">
                    <img className="col-start-1 col-span-1" alt=""/>
                    <div className="col-start-2 col-end-2 grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr,2fr] grid self-center">
                        <h1 className="text-[#484848] font-semibold text-left my-auto"> Supported play modes </h1>
                        <p className="text-[#484848] text-left my-auto"> {details.supported_play_modes} </p>
                    </div>
                </div>
                <div className="border-main border-t-2 grid grid-cols-[28px_1fr] py-3">
                    <img className="col-start-1 col-span-1" alt=""/>
                    <div className="col-start-2 col-end-2 grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr,2fr] grid self-center">
                        <h1 className="text-[#484848] font-semibold text-left my-auto"> Game file size </h1>
                        <p className="text-[#484848] text-left my-auto"> {details.release_date} </p>
                    </div>
                </div>
                <div className="border-main border-t-2 grid grid-cols-[28px_1fr] py-3">
                    <img className="col-start-1 col-span-1" alt=""/>
                    <div className="col-start-2 col-end-2 grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr,2fr] grid self-center">
                        <h1 className="text-[#484848] font-semibold text-left my-auto"> Supported languages </h1>
                        <p className="text-[#484848] text-left my-auto"> {details.release_date} </p>
                    </div>
                </div>
            </section>
        </>
    )
}