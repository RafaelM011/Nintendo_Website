import { Slider } from "../Slider/Slider"
import { Games } from "./Games"

export const MoreGames: React.FC = (): JSX.Element => {
    const WARNING = "WARNING: If you have epilepsy or have had seizures or other unusual reactions to flashing lights or patterns, consult a doctor before playing video games. All users should read the Health and Safety Information available in the system settings before using this software. \n\n Nintendo Switch Online membership (sold separately) and Nintendo Account required for online play. Not available in all countries. Internet access required for online features. Terms apply. nintendo.com/switch-online\n\nStardew Valley © ConcernedApe LLC 2016-2020. All rights reserved."

    function handleLeftClick(){
        const sliderContainer = document.getElementById('slider-game-container')
        if(sliderContainer) 
        {
            sliderContainer.scrollLeft -= 150; 
        }
    }

    function handleRightClick(){
        const sliderContainer = document.getElementById('slider-game-container')
        if(sliderContainer) 
        {
            sliderContainer.scrollLeft += 150; 
        }
    }
    
    return(
        <section className="w-full max-w-[1000px] mx-auto mt-20 px-4">
            <h1 className="text-main text-2xl font-bold">  More like this </h1>
            <div className="w-11/12 max-w-[900px] h-fit mx-auto mt-10 relative">
                <Slider id='slider-game-container' height="h-fit">
                    <Games/>
                    <Games/>
                    <Games/>
                    <Games/>
                    <Games/>
                    <Games/>
                </Slider>
                <button className="absolute bottom-2 left-0 h-[378px] w-1/12 bg-black opacity-30 text-white hover:opacity-70" onClick={handleLeftClick}> 
                    L
                </button>
                <button className="absolute bottom-2 right-0 h-[378px] w-1/12 bg-black opacity-30 text-white hover:opacity-70" onClick={handleRightClick}>
                    R
                </button>
            </div>
            <p className="text-xs mt-16 whitespace-pre-line">
                {WARNING}
            </p>
        </section>
    )
}