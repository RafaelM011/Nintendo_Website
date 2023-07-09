type Props = {
    id: string;
    height: string;
    children: JSX.Element | JSX.Element[];
}

export const Slider: React.FC<Props> = ({id, height, children}): JSX.Element => {
    return(
        <div id={id} className={`py-2 w-full ${height} overflow-auto scrollbar-hide flex gap-4 relative`}>
            {children}
        </div>
    )
}