export const Footer: React.FC = (): JSX.Element => {
    return(
        <>
            <header className='w-full bg-secundary h-[120px] flex justify-between px-60 text-white'>
                <svg className=" cursor-pointer" 
                    viewBox="0 0 97 24" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="195" 
                    role="presentation" 
                    data-testid="NintendoRacetrackLogoIcon" 
                    color="currentColor">
                    <path d="M17.945 14.157l-4.85-7.838H9.609V17.59h3.486V9.752l4.85 7.838h3.456V6.32h-3.486l.03 7.837zm27.554-4.04V8.993H43.68v-1.52h-3.395v1.52h-1.849v1.124h1.85v7.473h3.394v-7.473h1.82zM23.341 17.56h3.364v-7.474h-3.364v7.474zm0-8.932h3.395V6.319H23.34v2.309zm59.17.942c-2.728 0-4.941 1.883-4.941 4.192s2.213 4.193 4.94 4.193c2.729 0 4.942-1.884 4.942-4.193 0-2.309-2.213-4.192-4.941-4.192zm1.364 5.772c0 1.185-.698 1.67-1.364 1.67-.667 0-1.395-.485-1.395-1.67v-3.16c0-1.184.697-1.67 1.395-1.67.666 0 1.364.486 1.364 1.67v3.16zm-10.73-4.891c-.547-.304-1.123-.608-1.91-.669-2.426-.212-4.305 1.945-4.305 3.92 0 2.612 2 3.554 2.304 3.706 1.152.516 2.607.547 3.88-.274v.426h3.334V6.32h-3.334c.03 0 .03 2.4.03 4.13zm.03 3.342v1.336c0 1.155-.789 1.458-1.334 1.458-.546 0-1.334-.303-1.334-1.458v-2.673c0-1.155.788-1.458 1.334-1.458.515 0 1.333.303 1.333 1.458v1.337zM34.616 9.752c-1.122.03-2.031.516-2.698 1.124v-.79h-3.365v7.474h3.365v-4.922c0-.638.697-1.367 1.607-1.367.909 0 1.546.73 1.546 1.367v4.922h3.364v-4.071c0-2.947-2.546-3.798-3.82-3.737zm27.433 0a4.075 4.075 0 0 0-2.698 1.124v-.79h-3.365v7.474h3.365v-4.922c0-.638.697-1.367 1.606-1.367.91 0 1.546.73 1.546 1.367v4.922h3.365v-4.071c0-2.947-2.546-3.798-3.82-3.737zm-7.063 4.101c0-2.309-2.243-4.253-4.971-4.253-2.759 0-4.972 1.884-4.972 4.193 0 2.308 2.213 4.192 4.972 4.192 2.273 0 4.213-1.306 4.789-3.068H51.44v.455c0 1.367-.91 1.671-1.394 1.671-.515 0-1.425-.304-1.425-1.67v-1.55l6.366.03zm-6.123-2.643a1.391 1.391 0 0 1 1.182-.668c.455 0 .91.213 1.182.668.212.365.212.82.212 1.458H48.62c0-.637.03-1.063.243-1.458zm39.921-3.493c0-.365-.272-.547-.818-.547h-.758v1.914h.455v-.79h.242l.364.79h.515l-.424-.851c.273-.091.424-.273.424-.516zm-.879.273h-.242v-.547h.212c.273 0 .424.091.424.274 0 .212-.12.273-.394.273zm.03-1.58c-.94 0-1.727.79-1.727 1.732s.788 1.732 1.728 1.732 1.727-.79 1.727-1.732a1.73 1.73 0 0 0-1.727-1.732zm0 3.13a1.413 1.413 0 0 1-1.394-1.398c0-.76.637-1.398 1.395-1.398.757 0 1.394.638 1.394 1.398 0 .76-.637 1.397-1.394 1.397zM84.148 0H12.64C5.062-.03 0 5.438 0 11.97c0 6.53 5.062 11.939 12.67 11.939h71.508c7.608 0 12.67-5.408 12.67-11.94C96.818 5.44 91.726 0 84.148 0zm-.03 20.993H12.671c-6.033.03-9.7-4.041-9.7-9.023 0-4.983 3.698-8.993 9.7-9.023h71.446c6.002 0 9.7 4.04 9.7 9.023 0 4.982-3.668 9.023-9.7 9.023z" fill="currentColor">
                    </path>
                </svg>
                <div className="flex justify-center gap-14">
                    <svg className=" cursor-pointer" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 32 32" 
                        width="30" 
                        role="presentation" 
                        data-testid="FacebookIcon" 
                        color="currentColor">
                        <path d="M16 0C7.2 0 0 7.2 0 16c0 8 5.9 14.6 13.5 15.8V20.6H9.4V16h4.1v-3.5c0-4 2.4-6.2 6-6.2 1.8 0 3.6.3 3.6.3v3.9h-2c-2 0-2.6 1.2-2.6 2.5v3h4.4l-.7 4.6h-3.7v11.2C26.1 30.6 32 24 32 16c0-8.8-7.2-16-16-16z" fill="currentColor">
                        </path>
                    </svg>
                    <svg className=" cursor-pointer" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 32 32"
                        width="30" 
                        role="presentation" 
                        data-testid="InstagramIcon" 
                        color="currentColor">
                        <path fill="currentColor" d="M24.506 5.514c-.511 0-.949.188-1.335.573-.385.376-.573.845-.573 1.397 0 .51.188.949.573 1.334.376.386.845.574 1.397.574.51 0 .949-.188 1.334-.574.376-.375.574-.823.574-1.334 0-.552-.188-1.011-.574-1.397-.375-.385-.844-.573-1.396-.573z">
                        </path>
                        <path fill="currentColor" d="M31.687 7.213a9.443 9.443 0 0 0-.51-1.689 7.692 7.692 0 0 0-.761-1.49 11.917 11.917 0 0 0-1.084-1.366c-.47-.427-.918-.792-1.366-1.084a7.403 7.403 0 0 0-1.49-.76 21.14 21.14 0 0 0-1.689-.48c-.615-.146-1.345-.24-2.189-.281-.844 0-1.616-.01-2.314-.032C19.586.011 18.158 0 16 0s-3.586.01-4.284.031c-.698.021-1.47.052-2.314.094-.844 0-1.574.073-2.189.219-.615.156-1.178.313-1.689.48-.51.208-.99.469-1.459.76-.469.303-.928.657-1.397 1.084-.427.47-.792.928-1.084 1.397-.291.47-.552.949-.76 1.46-.178.51-.334 1.073-.48 1.688-.146.615-.219 1.345-.219 2.189-.042.844-.073 1.616-.094 2.314C.011 12.414 0 13.842 0 16s.01 3.586.031 4.284c.021.698.052 1.47.094 2.314 0 .844.073 1.574.219 2.189.146.615.313 1.178.48 1.689.208.552.469 1.042.76 1.49.303.448.657.897 1.084 1.366.47.427.928.792 1.397 1.084.459.291.949.552 1.46.76.51.167 1.073.334 1.688.48.615.146 1.345.219 2.189.219.844.042 1.616.073 2.314.094.698.02 2.126.031 4.284.031s3.586-.01 4.284-.031a78.06 78.06 0 0 1 2.314-.032c.844-.041 1.574-.135 2.189-.281a26.634 26.634 0 0 0 1.689-.48 7.692 7.692 0 0 0 1.49-.76c.448-.303.897-.657 1.366-1.084.427-.47.792-.928 1.084-1.397.291-.459.552-.949.76-1.46.22-.51.386-1.073.511-1.688s.209-1.345.25-2.189c0-.844.01-1.616.032-2.314.02-.698.031-2.126.031-4.284v-4.284c0-.698-.02-1.47-.063-2.314a14.798 14.798 0 0 0-.25-2.189zm-2.574 13.008c-.021.657-.052 1.408-.094 2.252-.042.76-.115 1.376-.219 1.845a7.77 7.77 0 0 1-.354 1.146 3.9 3.9 0 0 1-.48.98c-.187.271-.417.563-.667.855a8.21 8.21 0 0 1-.886.667c-.292.188-.615.375-.948.542-.303.084-.678.177-1.147.282-.47.104-1.084.177-1.845.218-.844.042-1.605.073-2.283.094-.677.021-2.074.032-4.19.032s-3.513-.01-4.19-.032c-.678-.02-1.439-.052-2.283-.094-.76-.041-1.376-.114-1.845-.218s-.855-.198-1.146-.282a10.26 10.26 0 0 1-.949-.542 8.21 8.21 0 0 1-.886-.667c-.25-.292-.48-.584-.667-.855a3.435 3.435 0 0 1-.48-.98 6.029 6.029 0 0 1-.354-1.146c-.104-.47-.177-1.084-.219-1.845-.042-.844-.073-1.595-.094-2.251-.02-.657-.031-2.064-.031-4.222 0-2.116.01-3.513.031-4.19.021-.678.052-1.439.094-2.283.042-.76.115-1.376.219-1.845.115-.469.23-.834.354-1.084.125-.386.292-.73.48-1.021.187-.292.417-.574.667-.824.292-.292.594-.542.886-.73.292-.198.605-.354.949-.479.302-.136.677-.25 1.146-.354s1.084-.178 1.845-.22a46.697 46.697 0 0 1 2.283-.062h8.38c.677 0 1.439.021 2.283.063.76.041 1.376.114 1.845.219.469.114.855.229 1.146.354.334.125.657.292.949.48.292.187.594.416.886.667.25.291.48.594.667.886.198.291.355.615.48.948.135.302.25.678.354 1.147s.177 1.084.219 1.845c.042.854.073 1.615.094 2.293.02.677.031 2.074.031 4.19 0 2.158-.01 3.565-.031 4.221z">
                        </path>
                        <path fill="currentColor" d="M15.99 7.797c-2.294 0-4.232.802-5.817 2.387C8.578 11.779 7.786 13.717 7.786 16c0 2.293.792 4.221 2.387 5.816 1.595 1.595 3.523 2.387 5.817 2.387s4.231-.802 5.816-2.387c1.584-1.595 2.376-3.533 2.387-5.816 0-2.293-.803-4.232-2.387-5.816-1.595-1.595-3.523-2.387-5.816-2.387zm3.783 11.987c-1.042 1.032-2.303 1.553-3.783 1.553-1.491 0-2.742-.51-3.784-1.553-1.032-1.043-1.553-2.304-1.553-3.784 0-1.49.51-2.741 1.553-3.784 1.042-1.032 2.303-1.553 3.784-1.553s2.74.521 3.783 1.553c1.032 1.043 1.553 2.304 1.553 3.784 0 1.49-.51 2.741-1.553 3.784z">
                        </path>
                    </svg>
                    <svg className=" cursor-pointer" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 32 32" 
                        width="30" 
                        role="presentation" 
                        data-testid="TwitterIcon" 
                        color="currentColor">
                        <path d="M28.73 9.48v.85C28.75 19 22.16 29 10.11 29A18.65 18.65 0 0 1 .06 26a13.61 13.61 0 0 0 1.56.1 13.2 13.2 0 0 0 8.14-2.81 6.58 6.58 0 0 1-6.12-4.55 6.58 6.58 0 0 0 3-.12 6.54 6.54 0 0 1-5.26-6.42v-.08a6.46 6.46 0 0 0 3 .82 6.57 6.57 0 0 1-2-8.75 18.62 18.62 0 0 0 13.5 6.85A6.56 6.56 0 0 1 27 5.09a13.32 13.32 0 0 0 4.12-1.59 6.56 6.56 0 0 1-2.88 3.62 13 13 0 0 0 3.76-1 13.18 13.18 0 0 1-3.27 3.36z" fill="currentColor">
                        </path>
                    </svg>
                    <svg className=" cursor-pointer" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 32 32" 
                        width="30" 
                        role="presentation" 
                        data-testid="YoutubeIcon" 
                        color="currentColor">
                        <path d="M31.33 8.3a4 4 0 0 0-2.83-2.83C26 4.8 16 4.8 16 4.8s-10 0-12.5.67A4 4 0 0 0 .67 8.3 41.51 41.51 0 0 0 0 16a41.51 41.51 0 0 0 .67 7.7 4 4 0 0 0 2.83 2.83c2.5.67 12.5.67 12.5.67s10 0 12.5-.67a4 4 0 0 0 2.83-2.83A41.51 41.51 0 0 0 32 16a41.51 41.51 0 0 0-.67-7.7zM12.8 20.8v-9.6l8.31 4.8z" fill="currentColor">
                            <path d="M28.73 9.48v.85C28.75 19 22.16 29 10.11 29A18.65 18.65 0 0 1 .06 26a13.61 13.61 0 0 0 1.56.1 13.2 13.2 0 0 0 8.14-2.81 6.58 6.58 0 0 1-6.12-4.55 6.58 6.58 0 0 0 3-.12 6.54 6.54 0 0 1-5.26-6.42v-.08a6.46 6.46 0 0 0 3 .82 6.57 6.57 0 0 1-2-8.75 18.62 18.62 0 0 0 13.5 6.85A6.56 6.56 0 0 1 27 5.09a13.32 13.32 0 0 0 4.12-1.59 6.56 6.56 0 0 1-2.88 3.62 13 13 0 0 0 3.76-1 13.18 13.18 0 0 1-3.27 3.36z" fill="currentColor">
                            </path>
                        </path>
                    </svg>
                </div>
            </header>
            <main className='w-8/12 h-[400px] mx-auto grid grid-cols-[1fr_1fr_1fr_1fr_2fr] pt-10'>
                <div className="col-start-1 col-end-1 border-main border-r-2 h-[220px] pl-4"> 
                    <h1 className="text-main font-bold text-md hover:underline underline-offset-8 decoration-red-800"> About Nintendo </h1>
                    <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> Careers </p>
                    <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> Corporate Social Responsability </p>
                </div>
                <div className="col-start-2 col-end-2 border-main border-r-2 h-[220px] pl-4"> 
                     <h1 className="text-main font-bold text-md hover:underline underline-offset-8 decoration-red-800"> Shop </h1>
                     <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> Games </p>
                     <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> Hardware </p>
                     <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> Merchandise </p>
                     <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> Sales & deals </p>
                     <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> Exclusives </p>
                     <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> Online services </p>
                     <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> Nintendo NY sotre </p>
                </div>
                <div className="col-start-3 col-end-3 border-main border-r-2 h-[220px] pl-4"> 
                     <h1 className="text-main font-bold text-md hover:underline underline-offset-8 decoration-red-800"> My Nintendo Store orders </h1>
                     <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> Orders detail </p>
                     <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> Shipping info </p>
                     <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> Returns & exchanges </p>
                     <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> FAQ </p>
                </div>
                <div className="h-[220px] pl-4"> 
                     <h1 className="text-main font-bold text-md hover:underline underline-offset-8 decoration-red-800"> Supports </h1>
                     <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> Nintendo Switch </p>
                     <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> Nintendo Account </p>
                     <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> Other systems </p>
                     <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> Reparis </p>
                     <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> Nintendo product recucling </p>
                </div>
                <div className="h-[220px] pl-4 grid grid-cols-2 grid-rows-2 gap-5"> 
                     <div className="border-main border-l-2 h-[100px] pl-4">  
                         <h1 className="text-main font-bold text-md hover:underline underline-offset-8 decoration-red-800"> Parents </h1>
                         <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> Info for parents </p>
                         <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> Parental controls </p>
                     </div>
                     <div className="border-main border-l-2 h-[100px] pl-4">  
                        <h1 className="text-main font-bold text-md hover:underline underline-offset-8 decoration-red-800"> Community </h1>
                        <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> Community guidelines </p>
                        <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> Online safety principles </p>
                     </div>
                     <div className="border-main border-l-2 h-[100px] pl-4">  
                        <h1 className="text-main font-bold text-md hover:underline underline-offset-8 decoration-red-800"> Privacy </h1>
                        <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> Privacy policy </p>
                        <p className="text-secundary font-bold text-sm hover:underline hover:text-red-800 underline-offset-8 decoration-red-800 my-2"> Cookies and interes-based-ads </p>
                     </div>
                </div>
            </main>
            <footer className='w-full h-[80px] bg-[#242424] flex gap-10 justify-center items-center'>
                <p className='text-xs text-white'> © Nintendo. Games are property of their respective owners. Nintendo of America Inc. Headquarters are in Redmond, Washington, USA </p>
                <div className='flex gap-4 '>
                    <button className='text-xs font-medium border-secundary hover:border-b-2 text-white '> Contact Us </button>
                    <button className='text-xs font-medium border-secundary hover:border-b-2 text-white '> Website feedback </button>
                    <button className='text-xs font-medium border-secundary hover:border-b-2 text-white '> Terms of use </button>
                    <button className='text-xs font-medium border-secundary hover:border-b-2 text-white '> Documents & Policies </button>
                </div>
            </footer>
        </>
    )
}