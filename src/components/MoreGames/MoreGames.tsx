export const MoreGames: React.FC = (): JSX.Element => {
    const WARNING = "WARNING: If you have epilepsy or have had seizures or other unusual reactions to flashing lights or patterns, consult a doctor before playing video games. All users should read the Health and Safety Information available in the system settings before using this software. \n\n Nintendo Switch Online membership (sold separately) and Nintendo Account required for online play. Not available in all countries. Internet access required for online features. Terms apply. nintendo.com/switch-online\n\nStardew Valley © ConcernedApe LLC 2016-2020. All rights reserved."

    return(
        <section className="w-[1000px] mx-auto mt-20">
            <h1 className="text-main text-2xl font-bold">  More like this </h1>
            <div className="w-[900px] h-[250px] mx-auto mt-10 bg-red-300">

            </div>
            <p className="text-xs mt-16 whitespace-pre-line">
                {WARNING}
            </p>
        </section>
    )
}