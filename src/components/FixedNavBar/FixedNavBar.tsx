import { useEffect, useState } from "react"
import { MediumNavBar } from "./MediumNavBar";
import { LargeNavBar } from "./LargeNavBar";
import { BottomNavBar } from "./BottomNavBar";


export const FixedNavBar = (): JSX.Element => {
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
        <header className="fixed top-0 left-0 right-0 z-10">
            { viewportWidth < 1024 
                ? <MediumNavBar/>
                : 
                <>
                    <LargeNavBar/>
                    <BottomNavBar/>
                </>
            }
            <div className="bg-white flex justify-center gap-8 items-center w-full h-[52px] border-b-[1px] border-main max-[1024px]:hidden">
                <button className="h-5/6 pt-3 text-main font-bold hover:text-secundary transition ease-in-out duration-200"> My Nintendo Store </button>
                <button className="h-5/6 pt-3 text-main font-bold hover:text-secundary transition ease-in-out duration-200"> Games </button>
                <button className="h-5/6 pt-3 text-main font-bold hover:text-secundary transition ease-in-out duration-200"> Nintendo Switch </button>
                <button className="h-5/6 pt-3 text-main font-bold hover:text-secundary transition ease-in-out duration-200"> News & Events </button>
                <button className="h-5/6 pt-3 text-main font-bold hover:text-secundary transition ease-in-out duration-200"> Play Nintendo </button>
            </div>
        </header>
    )
}