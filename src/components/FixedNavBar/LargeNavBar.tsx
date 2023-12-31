import Support_Icon from "../../icons/help_live_question_icon.png";
import Wish_List_Icon from "../../icons/favourite_heart_love_icon.png";
import Cart_Icon from "../../icons/cart_shopping_icon.png";
import Login_Icon from "../../icons/login_user_icon.png";
import Magnifier_Icon from "../../icons/magnifier_search_zoom_icon.png";

export const LargeNavBar = (): JSX.Element => {
    return(
        <div className="bg-white flex">
            <div data-testid='nintendo_logo' className="bg-[#e60012] min-w-[105px] h-[52px] flex place-content-center">
                <svg viewBox="0 0 97 24" xmlns="http://www.w3.org/2000/svg" width="69" role="presentation" data-testid="NintendoRacetrackLogoIcon" color="white"><path d="M17.945 14.157l-4.85-7.838H9.609V17.59h3.486V9.752l4.85 7.838h3.456V6.32h-3.486l.03 7.837zm27.554-4.04V8.993H43.68v-1.52h-3.395v1.52h-1.849v1.124h1.85v7.473h3.394v-7.473h1.82zM23.341 17.56h3.364v-7.474h-3.364v7.474zm0-8.932h3.395V6.319H23.34v2.309zm59.17.942c-2.728 0-4.941 1.883-4.941 4.192s2.213 4.193 4.94 4.193c2.729 0 4.942-1.884 4.942-4.193 0-2.309-2.213-4.192-4.941-4.192zm1.364 5.772c0 1.185-.698 1.67-1.364 1.67-.667 0-1.395-.485-1.395-1.67v-3.16c0-1.184.697-1.67 1.395-1.67.666 0 1.364.486 1.364 1.67v3.16zm-10.73-4.891c-.547-.304-1.123-.608-1.91-.669-2.426-.212-4.305 1.945-4.305 3.92 0 2.612 2 3.554 2.304 3.706 1.152.516 2.607.547 3.88-.274v.426h3.334V6.32h-3.334c.03 0 .03 2.4.03 4.13zm.03 3.342v1.336c0 1.155-.789 1.458-1.334 1.458-.546 0-1.334-.303-1.334-1.458v-2.673c0-1.155.788-1.458 1.334-1.458.515 0 1.333.303 1.333 1.458v1.337zM34.616 9.752c-1.122.03-2.031.516-2.698 1.124v-.79h-3.365v7.474h3.365v-4.922c0-.638.697-1.367 1.607-1.367.909 0 1.546.73 1.546 1.367v4.922h3.364v-4.071c0-2.947-2.546-3.798-3.82-3.737zm27.433 0a4.075 4.075 0 0 0-2.698 1.124v-.79h-3.365v7.474h3.365v-4.922c0-.638.697-1.367 1.606-1.367.91 0 1.546.73 1.546 1.367v4.922h3.365v-4.071c0-2.947-2.546-3.798-3.82-3.737zm-7.063 4.101c0-2.309-2.243-4.253-4.971-4.253-2.759 0-4.972 1.884-4.972 4.193 0 2.308 2.213 4.192 4.972 4.192 2.273 0 4.213-1.306 4.789-3.068H51.44v.455c0 1.367-.91 1.671-1.394 1.671-.515 0-1.425-.304-1.425-1.67v-1.55l6.366.03zm-6.123-2.643a1.391 1.391 0 0 1 1.182-.668c.455 0 .91.213 1.182.668.212.365.212.82.212 1.458H48.62c0-.637.03-1.063.243-1.458zm39.921-3.493c0-.365-.272-.547-.818-.547h-.758v1.914h.455v-.79h.242l.364.79h.515l-.424-.851c.273-.091.424-.273.424-.516zm-.879.273h-.242v-.547h.212c.273 0 .424.091.424.274 0 .212-.12.273-.394.273zm.03-1.58c-.94 0-1.727.79-1.727 1.732s.788 1.732 1.728 1.732 1.727-.79 1.727-1.732a1.73 1.73 0 0 0-1.727-1.732zm0 3.13a1.413 1.413 0 0 1-1.394-1.398c0-.76.637-1.398 1.395-1.398.757 0 1.394.638 1.394 1.398 0 .76-.637 1.397-1.394 1.397zM84.148 0H12.64C5.062-.03 0 5.438 0 11.97c0 6.53 5.062 11.939 12.67 11.939h71.508c7.608 0 12.67-5.408 12.67-11.94C96.818 5.44 91.726 0 84.148 0zm-.03 20.993H12.671c-6.033.03-9.7-4.041-9.7-9.023 0-4.983 3.698-8.993 9.7-9.023h71.446c6.002 0 9.7 4.04 9.7 9.023 0 4.982-3.668 9.023-9.7 9.023z" fill="currentColor"></path></svg>
            </div>
            <div className="w-full flex justify-between items-center border-b-[1px] border-main">
                <div className="min-w-[350px] h-[34px] mx-4 border-b-2 border-main flex gap-2 hover:border-secundary transition ease-in-out duration-200">
                    <img className="w-[28px] hover:cursor-pointer" src={Magnifier_Icon} alt="search icon"/>
                    <input className="w-full focus:outline-none hover:cursor-pointer" placeholder="Search"/>
                    <select className="text-main focus:outline-none hover:cursor-pointer hover:text-secundary transition ease-in-out duration-200">
                        <option className="text-main"> All Categories </option>
                        <option className="text-main"> Games </option>
                        <option className="text-main"> Hardware </option>
                        <option className="text-main"> Merchandise </option>
                        <option className="text-main"> News & Event </option>
                        <option className="text-main"> Support </option>
                    </select>
                </div>
                <div className="w-[520px] h-[48px] flex justify-around items-center font-bold text-main">
                    <div className="flex items-center gap-1">
                        <img className="w-[20px]" src={Support_Icon} alt="support button"/>
                        <button className="hover:text-secundary transition ease-in-out duration-200">Support</button>
                    </div>
                    <div className="flex items-center gap-1">
                        <img className="w-[20px]" src={Wish_List_Icon} alt="wish list button"/>
                        <button className="hover:text-secundary transition ease-in-out duration-200">Wish List</button>
                    </div>
                    <div className="flex items-center gap-1">
                        <img className="w-[20px]" src={Cart_Icon} alt="cart button"/>
                        <button className="hover:text-secundary transition ease-in-out duration-200">Cart</button>
                    </div>
                    <div className="flex items-center gap-1">
                        <img className="w-[20px]" src={Login_Icon} alt="login button"/>
                        <button className="hover:text-secundary transition ease-in-out duration-200">Log in / Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}