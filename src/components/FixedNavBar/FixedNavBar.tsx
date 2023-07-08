import { useEffect, useState } from "react"
import { MediumNavBar } from "./MediumNavBar";
import { LargeNavBar } from "./LargeNavBar";
import { BottomNavBar } from "./BottomNavBar";

type Props = {
    downloadButtonOnScreen: boolean;
}

export const FixedNavBar: React.FC<Props> = ({downloadButtonOnScreen}): JSX.Element => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
    
    function setWindowDimensions(){
        setViewportWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', setWindowDimensions);
        
        return () => {
          window.removeEventListener('resize', setWindowDimensions)
        }
      }, [])

    return(
        <header className="sticky top-0 left-0 right-0 z-10">
            { viewportWidth <= 1024 
                ? 
                <>
                    <MediumNavBar/>
                    <BottomNavBar/>
                </>
                : <LargeNavBar/>
            }
            <div className="bg-white flex justify-center gap-8 items-center w-full h-[52px] border-b-[1px] border-main max-[1024px]:hidden">
                <button className="h-5/6 pt-3 text-main font-bold hover:text-secundary transition ease-in-out duration-200"> My Nintendo Store </button>
                <button className="h-5/6 pt-3 text-main font-bold hover:text-secundary transition ease-in-out duration-200"> Games </button>
                <button className="h-5/6 pt-3 text-main font-bold hover:text-secundary transition ease-in-out duration-200"> Nintendo Switch </button>
                <button className="h-5/6 pt-3 text-main font-bold hover:text-secundary transition ease-in-out duration-200"> News & Events </button>
                <button className="h-5/6 pt-3 text-main font-bold hover:text-secundary transition ease-in-out duration-200"> Play Nintendo </button>
            </div>
            <div className={`w-full bg-[#F8F8F8] ${downloadButtonOnScreen ? 'hidden' : viewportWidth <= 1024 ? 'hidden' : 'block'}`}>
                <div className="flex justify-between items-center w-full max-w-[1300px] mx-auto bg-[#F8F8F8] p-2">
                    <h1 className="text-2xl text-main font-semibold ml-10">
                        Stardey Valley
                    </h1>
                    <div className="flex justify-center items-center basis-4/12">
                        <h2 className="text-main bg-[#F8F8F8] mr-4">
                            Digital <b className="font-bold"> $14.99 </b>
                        </h2>
                        <button 
                            className="bg-secundary h-fit px-10 py-1 text-white text-lg font-bold rounded-full hover:scale-110 transition duration-200 hover:bg-red-700"
                        > 
                            Direct download 
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}