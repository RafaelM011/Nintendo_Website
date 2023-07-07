type Props = {
    children: JSX.Element | JSX.Element[];
}

export const Slider: React.FC<Props> = ({children}): JSX.Element => {
    return(
        <div id='slider-container' className="py-2 w-full h-[70px] overflow-auto scrollbar-hide flex gap-4 relative">
            {children}
        </div>
    )
}