import noImage from "../../assets/no_image.webp"

export const Games: React.FC = (): JSX.Element => {
    return(
        <div className="w-fit border-main border-[1px]">
            <img className="w-full h-2/5" src={noImage} alt='no-img'/>
            <div className="py-4 px-4 h-3/5 flex flex-col justify-between">
                <div className="w-[200px]">
                    <h1 className="text-[#484848] font-semibold"> Game Title 1 </h1>
                    <p className="text-main"> game release date </p>
                </div>
                <div className="">
                    <h1 className="text-[#484848] font-semibold mb-4"> $ Price </h1>
                    <h6 className="border-secundary border-l-[3px] pl-2 text-main"> Nintendo Switch </h6>
                </div>
            </div>
        </div>
    )
}