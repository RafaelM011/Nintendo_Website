import { useState } from "react";

interface Props {
    images: string[];
}

export const GameImages: React.FC<Props> = ({images}): JSX.Element => {
    const [imgIndex, setImgIndex] = useState(0);
    
    const handleSlide = (move: number): void => {
        setImgIndex((prevState) => prevState + move)
    }

    return(
        <>
            <div className="relative">
                <img src={require(`../../assets/${images[imgIndex]}`)} alt='game-img-data' className="w-full"/>
                <button onClick={() => handleSlide(-1)} className="absolute top-0 bottom-0 left-0 pl-10" disabled={imgIndex === 0}> L </button>
                <button onClick={() => handleSlide(1)} className="absolute top-0 bottom-0 right-0 pr-10" disabled={imgIndex === 6}> R </button>
            </div>
            <div className="py-2 bg-red-200 w-full h-[100px]">

            </div>
        </>
    )
}