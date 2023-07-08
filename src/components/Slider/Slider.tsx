type Props = {
    height: string;
    children: JSX.Element | JSX.Element[];
}

export const Slider: React.FC<Props> = ({height, children}): JSX.Element => {
    return(
        <div id='slider-container' className={`py-2 w-full ${height} overflow-auto scrollbar-hide flex gap-4 relative`}>
            {children}
        </div>
    )
}