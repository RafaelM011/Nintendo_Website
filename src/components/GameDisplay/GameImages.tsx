import { useState } from "react";
import { Slider } from "../Slider/Slider";

interface Props {
    images: string[];
}

export const GameImages: React.FC<Props> = ({images}): JSX.Element => {
    const [imgIndex, setImgIndex] = useState(0);
    // const imgElement = document.getElementById('slide-img')

    const handleSlide = (move: number): void => {
        setImgIndex((prevState) => prevState + move)
    }

    function handleLeftClick(){
        const sliderContainer = document.getElementById('slider-container')
        if(sliderContainer) 
        {
            sliderContainer.scrollLeft -= 96; 
        }
    }

    function handleRightClick(){
        const sliderContainer = document.getElementById('slider-container')
        if(sliderContainer) 
        {
            sliderContainer.scrollLeft += 96; 
        }
    }

    return(
        <>
            <div className="relative">
                <img src={require(`../../assets/${images[imgIndex]}`)} alt='game-img-data' className="w-full"/>
                <button onClick={() => handleSlide(-1)} className="absolute top-0 bottom-0 left-0 pl-10" disabled={imgIndex === 0}> L </button>
                <button onClick={() => handleSlide(1)} className="absolute top-0 bottom-0 right-0 pr-10" disabled={imgIndex === 6}> R </button>
            </div>
            <Slider height='h-[70px]'>
                <img className='opacity-60 hover:opacity-90' id='slide-img' src={require('../../assets/hero.avif')} alt='game-img-1' onClick={() => setImgIndex(0)}></img>
                <img className='opacity-60 hover:opacity-90' src={require('../../assets/screenshot01.avif')} alt='game-img-2' onClick={() => setImgIndex(1)}></img>
                <img className='opacity-60 hover:opacity-90' src={require('../../assets/screenshot02.avif')} alt='game-img-3' onClick={() => setImgIndex(2)}></img>
                <img className='opacity-60 hover:opacity-90' src={require('../../assets/screenshot03.avif')} alt='game-img-4' onClick={() => setImgIndex(3)}></img>
                <img className='opacity-60 hover:opacity-90' src={require('../../assets/screenshot04.avif')} alt='game-img-5' onClick={() => setImgIndex(4)}></img>
                <img className='opacity-60 hover:opacity-90' src={require('../../assets/screenshot05.avif')} alt='game-img-6' onClick={() => setImgIndex(5)}></img>
                <img className='opacity-60 hover:opacity-90' src={require('../../assets/screenshot06.avif')} alt='game-img-7' onClick={() => setImgIndex(6)}></img>
            </Slider>
            <button className="absolute bottom-2 left-0 h-[54px] w-1/12 bg-black opacity-30 text-white hover:opacity-70" onClick={handleLeftClick}> 
                L
            </button>
            <button className="absolute bottom-2 right-0 h-[54px] w-1/12 bg-black opacity-30 text-white hover:opacity-70" onClick={handleRightClick}>
                R
            </button>
        </>
    )
}