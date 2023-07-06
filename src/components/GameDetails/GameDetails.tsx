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
            <section className="w-full max-w-[1000px] flex flex-col md:flex-row gap-8 mx-auto justify-between mt-20 px-4">
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
            <section className="max-w-[1000px] grid grid-rows-[repeat(8,1fr)] mx-auto mt-10 px-4">
                <div className="border-main border-t-2 grid grid-cols-[28px_1fr] py-3">
                    <svg 
                        className="col-start-1 col-end-1 self-center" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 32 32" 
                        width="28" 
                        role="presentation" 
                        data-testid="CalendarIcon" 
                        color="currentColor">
                        <path 
                            fill="currentColor" 
                            d="M21.8 19.1h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm0 8.6h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm1.6-20.3h1.5c.5 0 .9-.4.9-.9v-5c0-.5-.4-.9-.9-.9h-1.5c-.5 0-.9.4-.9.9v5c0 .5.4.9.9.9zm-16.3 0h1.5c.5 0 .9-.4.9-.9v-5c0-.5-.4-.9-.9-.9H7.1c-.5 0-.9.4-.9.9v5c0 .5.4.9.9.9zm6.1 20.3h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9z">
                        </path>
                        <path 
                            fill="currentColor" 
                            d="M29.5 4.3H27v2.2c0 1.2-.9 2.1-2.1 2.1h-1.5c-1.2 0-2.1-1-2.1-2.1V4.3H10.7v2.2c0 1.2-.9 2.1-2.1 2.1H7.1C5.9 8.6 5 7.6 5 6.5V4.3H2.5C1.1 4.3 0 5.4 0 6.7V29c0 1.4 1.1 2.5 2.5 2.5h27c1.4 0 2.5-1.1 2.5-2.5V6.7c0-1.3-1.1-2.4-2.5-2.4zm0 24.7h-27V10.4h27V29z">
                        </path>
                        <path 
                            fill="currentColor" 
                            d="M13.2 19.1h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm-8.6 8.6h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9H4.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm0-8.6h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9H4.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9z">
                        </path>
                    </svg>
                    <div className="col-start-2 col-end-2 grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr,2fr] grid self-center pl-4">
                        <h1 className="text-[#484848] font-semibold text-left my-auto"> Release Date </h1>
                        <p className="text-[#484848] text-left my-auto"> {details.release_date} </p>                        
                    </div>
                </div>
                <div className="border-main border-t-2 grid grid-cols-[28px_1fr] py-3">
                    <svg className="col-start-1 col-end-1 self-center"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" role="presentation" data-testid="GroupIcon"  color="currentColor"><path fill="currentColor" d="M9 13c0 3.8 3.1 6.9 6.9 6.9 3.8 0 6.9-3.1 6.9-6.9 0-3.8-3.1-6.9-6.9-6.9C12.1 6.1 9 9.2 9 13z"></path><path fill="currentColor" d="M24.3 13c0 .7-.1 1.4-.3 2h.3c3.2 0 5.8-2.6 5.8-5.9 0-3.3-2.6-5.9-5.8-5.9-1.8 0-3.5.9-4.5 2.3 2.7 1.4 4.5 4.2 4.5 7.5zM7.4 15h.3c-.2-.6-.3-1.3-.3-2 0-3.3 1.8-6.1 4.5-7.5-1.1-1.4-2.7-2.3-4.5-2.3-3.2 0-5.8 2.6-5.8 5.9 0 3.3 2.6 5.9 5.8 5.9zm5.1 5.7c-1.8-.8-3.2-2.2-4.1-3.9-.3 0-.6-.1-1-.1C3.3 16.8 0 19.6 0 23h8.2c1.2-1 2.6-1.8 4.3-2.3zm11.8-3.9c-.3 0-.7 0-1 .1-.9 1.7-2.3 3.1-4.1 3.9 1.6.5 3.1 1.3 4.2 2.3h8.2c.2-3.5-3.2-6.3-7.3-6.3zm-8.4 5.1c-4.8 0-8.7 3-9 6.7h18c-.4-3.8-4.3-6.7-9-6.7z"></path>
                    </svg>
                    <div className="col-start-2 col-end-2 grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr,2fr] grid self-center pl-4">
                        <h1 className="text-[#484848] font-semibold text-left my-auto"> No. of players </h1>
                        <div className="flex gap-4">
                            <p className="text-secundary text-left font-semibold border-b-2 border-secundary my-auto cursor-pointer"> {details.no_of_players.single_system} </p>
                            <p className="text-secundary text-left font-semibold border-b-2 border-secundary my-auto cursor-pointer"> {details.no_of_players.local_wireless} </p>
                            <p className="text-secundary text-left font-semibold border-b-2 border-secundary my-auto cursor-pointer"> {details.no_of_players.online} </p>
                        </div>
                    </div>
                </div>
                <div className="border-main border-t-2 grid grid-cols-[28px_1fr] py-3">
                    <svg className="col-start-1 col-end-1 self-center"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" role="presentation" data-testid="DPadIcon" color="currentColor"><path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path>
                    </svg>
                    <div className="col-start-2 col-end-2 grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr,2fr] grid self-center pl-4">
                        <h1 className="text-[#484848] font-semibold text-left my-auto"> Genre </h1>
                        <div className="flex gap-4">
                            <p className="text-secundary text-left font-semibold border-b-2 border-secundary my-auto cursor-pointer"> {details.genre.role_playing} </p>
                            <p className="text-secundary text-left font-semibold border-b-2 border-secundary my-auto cursor-pointer"> {details.genre.simulation} </p>
                        </div>
                    </div>
                </div>
                <div className="border-main border-t-2 grid grid-cols-[28px_1fr] py-3">
                    <svg className="col-start-1 col-end-1 self-center" 
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" role="presentation" data-testid="BuildingIcon" color="currentColor"><path d="M28.9 2.1C28.9 1 28 0 26.8 0H5.6C4.4 0 3.5 1 3.5 2.1v29.8H12v-6.4h7.4v6.4h9.5V2.1zm-19 25.6H6.7v-3.2h3.2v3.2zm0-5.4H6.7v-3.2h3.2v3.2zm0-5.3H6.7v-3.2h3.2V17zm0-5.3H6.7V8.5h3.2v3.2zm0-5.3H6.7V3.2h3.2v3.2zm5.2 15.9H12v-3.2h3.2v3.2zm0-5.3H12v-3.2h3.2V17zm0-5.3H12V8.5h3.2v3.2zm0-5.3H12V3.2h3.2v3.2zm5.3 15.9h-3.2v-3.2h3.2v3.2zm0-5.3h-3.2v-3.2h3.2V17zm0-5.3h-3.2V8.5h3.2v3.2zm0-5.3h-3.2V3.2h3.2v3.2zm5.3 21.3h-3.2v-3.2h3.2v3.2zm0-5.4h-3.2v-3.2h3.2v3.2zm0-5.3h-3.2v-3.2h3.2V17zm0-5.3h-3.2V8.5h3.2v3.2zm0-5.3h-3.2V3.2h3.2v3.2z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path>
                    </svg>
                    <div className="col-start-2 col-end-2 grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr,2fr] grid self-center pl-4">
                        <h1 className="text-[#484848] font-semibold text-left my-auto"> Publisher </h1>
                        <p className="text-secundary font-semibold text-left my-auto border-b-2 border-secundary cursor-pointer w-fit"> {details.publisher} </p>
                    </div>
                </div>
                <div className="border-main border-t-2 grid grid-cols-[28px_1fr] py-3">
                    <svg className="col-start-1 col-end-1" 
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" role="presentation" data-testid="GearIcon" color="currentColor"><path d="M30.6 13.1h-2.4c-.3-1.4-.8-2.6-1.5-3.8l1.7-1.7c.5-.5.5-1.4 0-1.9l-2.1-2.1c-.5-.5-1.4-.5-1.9 0l-1.7 1.7c-1.2-.7-2.4-1.3-3.8-1.5V1.4c0-.7-.6-1.4-1.4-1.4h-3c-.7 0-1.4.6-1.4 1.4v2.4c-1.4.4-2.6.8-3.8 1.5L7.6 3.6c-.5-.5-1.4-.5-1.9 0L3.6 5.7c-.6.5-.6 1.4 0 1.9l1.7 1.7c-.7 1.2-1.3 2.4-1.5 3.8H1.3c-.7 0-1.4.6-1.4 1.4v3c0 .7.6 1.4 1.4 1.4h2.4c.3 1.4.8 2.6 1.5 3.8l-1.7 1.7c-.5.5-.5 1.4 0 1.9l2.1 2.1c.6.5 1.4.5 2 0l1.7-1.7c1.2.7 2.4 1.3 3.8 1.5v2.5c0 .7.6 1.4 1.4 1.4h3c.7 0 1.4-.6 1.4-1.4v-2.4c1.4-.3 2.6-.8 3.8-1.5l1.7 1.7c.5.5 1.4.5 1.9 0l2.1-2.1c.5-.5.5-1.4 0-1.9l-1.7-1.7c.7-1.2 1.3-2.4 1.5-3.8h2.4c.7 0 1.4-.6 1.4-1.4v-3c.1-.9-.6-1.5-1.4-1.5zM16 21.6c-3.1 0-5.6-2.5-5.6-5.6 0-3.1 2.5-5.6 5.6-5.6 3.1 0 5.6 2.5 5.6 5.6-.1 3.1-2.6 5.6-5.6 5.6z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path>
                    </svg>
                    <div className="col-start-2 col-end-2 grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr,2fr] grid self-center pl-4">
                        <h1 className="text-[#484848] font-semibold text-left my-auto"> ESRB rating </h1>
                        <p className="text-secundary font-semibold text-left my-auto border-b-2 border-secundary cursor-pointer w-fit"> {details.ESRB_rating} </p>
                    </div>
                </div>
                <div className="border-main border-t-2 grid grid-cols-[28px_1fr] py-3">
                    <svg className="col-start-1 col-end-1" 
                        data-name="Switch lite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" role="presentation" data-testid="SwitchLiteIcon" color="currentColor"><path d="M28.737 9.41H3.262a3.218 3.218 0 0 0-3.218 3.218v7.164a3.218 3.218 0 0 0 3.218 3.218h25.475a3.218 3.218 0 0 0 3.219-3.218v-7.164a3.218 3.218 0 0 0-3.219-3.218zm.112 2.173a.563.563 0 1 1-.563.563.563.563 0 0 1 .563-.563zm0 2.32a.563.563 0 1 1-.563.564.563.563 0 0 1 .563-.563zM3.146 12.106a1.2 1.2 0 1 1-1.2 1.201 1.2 1.2 0 0 1 1.2-1.2zm1.437 5.85a.125.125 0 0 1-.125.125h-.731a.133.133 0 0 0-.133.134v.73a.126.126 0 0 1-.125.126h-.636a.125.125 0 0 1-.126-.126v-.73a.133.133 0 0 0-.132-.134h-.732a.125.125 0 0 1-.125-.125v-.636a.125.125 0 0 1 .125-.125h.732a.133.133 0 0 0 .132-.133v-.73a.125.125 0 0 1 .126-.126h.636a.126.126 0 0 1 .125.125v.731a.133.133 0 0 0 .133.133h.73a.125.125 0 0 1 .126.125zm1.674 3.654h19.497V10.82H6.257zm20.807-8.302a.563.563 0 1 1 .563.563.563.563 0 0 1-.563-.563zm1.778 5.532a1.2 1.2 0 1 1 1.2-1.2 1.2 1.2 0 0 1-1.2 1.2zm1.23-4.97a.563.563 0 1 1 .562-.562.563.563 0 0 1-.563.563z" fill="currentColor" fill-rule="evenodd"></path>
                    </svg>
                    <div className="col-start-2 col-end-2 grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr,2fr] grid self-center pl-4">
                        <h1 className="text-[#484848] font-semibold text-left my-auto"> Supported play modes </h1>
                        <p className="text-[#484848] text-left my-auto"> {details.supported_play_modes} </p>
                    </div>
                </div>
                <div className="border-main border-t-2 grid grid-cols-[28px_1fr] py-3">
                    <svg className="col-start-1 col-end-1" 
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" role="presentation" data-testid="StorageIcon" color="currentColor"><ellipse cx="16" cy="4.234" rx="13" ry="4.234" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></ellipse><path fill="currentColor" d="M3 15.71v5.293c0 .408.239.781.616.935C7.085 23.35 11.362 24.192 16 24.192s8.915-.84 12.384-2.254c.377-.154.616-.527.616-.935V15.71c-3.573 1.57-8.084 2.515-13 2.515S6.573 17.28 3 15.71z"></path><path fill="currentColor" d="M3 7.852v5.292c0 .408.239.782.616.935 3.469 1.414 7.746 2.254 12.384 2.254s8.915-.84 12.384-2.254c.377-.153.616-.527.616-.935V7.852c-3.573 1.57-8.084 2.514-13 2.514S6.573 9.422 3 7.852zm26 15.767c-3.573 1.57-8.084 2.514-13 2.514S6.573 25.19 3 23.62v4.147C3 30.104 8.82 32 16 32s13-1.896 13-4.234"></path>
                    </svg>
                    <div className="col-start-2 col-end-2 grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr,2fr] grid self-center pl-4">
                        <h1 className="text-[#484848] font-semibold text-left my-auto"> Game file size </h1>
                        <p className="text-[#484848] text-left my-auto"> {details.release_date} </p>
                    </div>
                </div>
                <div className="border-main border-t-2 grid grid-cols-[28px_1fr] py-3">
                    <svg className="col-start-1 col-end-1" 
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" role="presentation" data-testid="GlobeIcon" color="currentColor"><path d="M16 0C11.7 0 7.7 1.7 4.7 4.7S0 11.7 0 16c0 4.3 1.7 8.3 4.7 11.3S11.7 32 16 32c8.8 0 16-7.2 16-16S24.8 0 16 0zm-5.2 4c-.5.9-1 1.9-1.4 3-.6-.2-1.3-.5-2-.8 1-1 2.2-1.7 3.4-2.2zM5.5 8.1c1 .5 2.1 1 3.2 1.4-.4 1.6-.6 3.4-.7 5.2H3c.2-2.4 1.1-4.6 2.5-6.6zM3 17.3h5.1c.1 1.8.3 3.5.7 5.2-1.1.4-2.2.8-3.2 1.4-1.5-2-2.4-4.2-2.6-6.6zm4.4 8.5c.7-.3 1.4-.6 2.1-.8.4 1.1.9 2.1 1.4 3-1.3-.5-2.5-1.2-3.5-2.2zm7.3 2.8c-1-.8-2-2.3-2.7-4.3.9-.2 1.8-.3 2.7-.4v4.7zm0-7.3c-1.1.1-2.3.2-3.4.5-.3-1.4-.5-2.9-.6-4.5h4v4zm0-6.6h-4c.1-1.6.3-3.1.6-4.5 1.1.2 2.3.4 3.4.5v4zm0-6.7c-1 0-1.8-.1-2.7-.3.7-2 1.7-3.5 2.7-4.2V8zM29 14.7h-5.1c-.1-1.8-.3-3.5-.7-5.2 1.1-.4 2.2-.8 3.2-1.4 1.5 2 2.4 4.2 2.6 6.6zm-4.4-8.5c-.7.3-1.4.6-2.1.8-.4-1.1-.9-2.2-1.4-3.1 1.3.6 2.5 1.3 3.5 2.3zm-7.3-2.7c1 .8 1.9 2.3 2.6 4.2-.8.2-1.7.3-2.6.3V3.5zm0 7.2c1.1-.1 2.3-.2 3.4-.4.3 1.4.5 2.9.6 4.5h-3.9v-4.1zm0 17.8V24c.9.1 1.8.2 2.6.4-.6 1.8-1.6 3.4-2.6 4.1zm0-7.2v-4h3.9c-.1 1.6-.3 3.1-.6 4.5-1-.2-2.1-.4-3.3-.5zm3.8 6.8c.5-.9 1-1.9 1.4-3.1.7.2 1.4.5 2.1.9-1 .9-2.2 1.6-3.5 2.2zm5.4-4.2c-1-.5-2.1-1-3.2-1.4.4-1.6.6-3.4.7-5.1h5c-.2 2.3-1.1 4.5-2.5 6.5z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path>
                    </svg>
                    <div className="col-start-2 col-end-2 grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr,2fr] grid self-center pl-4">
                        <h1 className="text-[#484848] font-semibold text-left my-auto"> Supported languages </h1>
                        <p className="text-[#484848] text-left my-auto"> {details.release_date} </p>
                    </div>
                </div>
            </section>
        </>
    )
}