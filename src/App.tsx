import React, { useEffect, useState } from 'react';
import { FixedNavBar } from './components/FixedNavBar/FixedNavBar';
import { GameDisplay } from './components/GameDisplay/GameDisplay';
import data from "./mocks/data.json";
import { GameInfo } from './components/GameInfo/GameInfo';
import { GameDetails } from './components/GameDetails/GameDetails';
// import { MoreGames } from './components/MoreGames/MoreGames';
import { Footer } from './components/Footer/Footer';

function App() {
  const [downloadButtonOnScreen, setDownloadButtonOnScreen] = useState(false);
  let observer = new IntersectionObserver(() => {
      setDownloadButtonOnScreen(prevState => !prevState)
  }, {
      root: null,
      rootMargin: "0px",
      threshold: 1
  })

  useEffect(() => {
    let target = document.querySelector("#download_button")
    
    if(target) {
        observer.observe(target)
    }
}, [])

  return (
    <>
        <FixedNavBar downloadButtonOnScreen={downloadButtonOnScreen}/>
        <section className='flex gap-2 justify-center text-md items-center py-2 px-2 bg-[#F8F8F8]'>
            <div className='lg:border-r-2 border-main pr-4 h-fit'>
              <b>Free shipping</b> on orders $50 or more. <u>Restrictions apply.</u>
            </div>
            <div className='hidden lg:block'>
              Earn <b><u>My Nintendo Points</u></b> on digital games
            </div>
        </section>
        <main>
          <GameDisplay gameData={data}/>
          {/* {downloadButtonOnScreen ? 'true' : 'false'}  */}
          <GameInfo info={data}/>
          <GameDetails detail={data}/>
          <section className='mt-12 w-11/12 max-w-[1000px] h-[300px] bg-[#F8F8F8] mx-auto flex gap-2'>
            <div className='flex flex-col gap-6 justify-center'>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 250 66" 
                  width="200" 
                  role="presentation" 
                  data-testid="NsoHorizontalLogoIcon" 
                  color="currentColor">
                  <polygon fill="#E60012" points="0 0 250 0 250 66 0 66"></polygon>
                  <path d="M29.7610313,24.0037881 C29.7610313,25.9086441 31.3184219,27.4528305 33.240125,27.4528305 C35.1618281,27.4528305 36.7192187,25.9086441 36.7192187,24.0037881 C36.7192187,22.0993814 35.1618281,20.5556441 33.240125,20.5556441 C31.3184219,20.5556441 29.7610313,22.0993814 29.7610313,24.0037881 Z M41.5762656,13 L33.4879844,13 C28.2480469,13 24,17.2108051 24,22.4052542 L24,40.2747881 C24,45.4687881 28.2480469,49.6791441 33.4879844,49.6791441 L41.5762656,49.6791441 C41.72625,49.6791441 41.8476875,49.558322 41.8476875,49.4105508 L41.8476875,13.2690424 C41.8476875,13.1203729 41.72625,13 41.5762656,13 Z M38.8643125,46.7223729 L33.4879844,46.7223729 C31.7497969,46.7223729 30.1167344,46.0517881 28.8883125,44.8341356 C27.6594375,43.6169322 26.983375,41.9977373 26.983375,40.2747881 L26.983375,22.4052542 C26.983375,20.6823051 27.6594375,19.0631102 28.8878594,17.8463559 C30.1162813,16.6282542 31.7497969,15.9572203 33.4879844,15.9572203 L38.8643125,15.9572203 L38.8643125,46.7223729 Z M51.5155625,13 L45.7907812,13 C45.6575625,13 45.5501719,13.1068983 45.5501719,13.2393983 L45.5501719,49.4105508 C45.5501719,49.558322 45.6711562,49.6791441 45.8206875,49.6791441 L51.5155625,49.6791441 C56.7559531,49.6791441 61.0035469,45.4687881 61.0035469,40.2747881 L61.0035469,22.4052542 C61.0035469,17.2108051 56.7559531,13 51.5155625,13 L51.5155625,13 Z M52.8708594,36.882339 C50.8041562,36.882339 49.1294062,35.221822 49.1294062,33.1736864 C49.1294062,31.1255508 50.8041562,29.4654831 52.8708594,29.4654831 C54.9366562,29.4654831 56.6118594,31.1255508 56.6118594,33.1736864 C56.6118594,35.221822 54.9366562,36.882339 52.8708594,36.882339 L52.8708594,36.882339 Z M127.711703,45.4099492 L127.711703,19.5724492 L122.177687,19.5724492 L122.177687,36.2378051 L109.202,19.5724492 L103.950734,19.5724492 L103.950734,45.4099492 L109.221484,45.4099492 L109.221484,28.1813559 L123.094812,45.4099492 L127.711703,45.4099492 Z M83.5388125,18.7343305 C75.761375,18.7343305 69.4565937,24.8935593 69.4565937,32.4909746 C69.4565937,40.088839 75.761375,46.2480678 83.5388125,46.2480678 C91.3171562,46.2480678 97.6219375,40.0883898 97.6219375,32.4909746 C97.6219375,24.8935593 91.3171562,18.7343305 83.5388125,18.7343305 Z M83.5388125,40.9902881 C78.9640625,40.9902881 75.2543281,37.1846186 75.2543281,32.4914237 C75.2543281,27.7977797 78.9640625,23.9930085 83.5388125,23.9930085 C88.1149219,23.9930085 91.8242031,27.7977797 91.8242031,32.4914237 C91.8242031,37.1846186 88.1149219,40.9902881 83.5388125,40.9902881 L83.5388125,40.9902881 Z M140.889031,19.5724492 L135.291125,19.5724492 L135.291125,45.4099492 L155.173344,45.4099492 L155.173344,40.3713559 L140.889484,40.3713559 L140.889484,19.5724492 L140.889031,19.5724492 Z M166.203312,19.5724492 L160.605406,19.5724492 L160.605406,45.4095 L166.203312,45.4095 L166.203312,19.5724492 Z M226.680094,24.6110424 L226.680094,19.5724492 L205.158016,19.5724492 L205.158016,45.4099492 L226.680094,45.4099492 L226.680094,40.3713559 L210.756375,40.3713559 L210.756375,34.5346186 L225.907516,34.5346186 L225.907516,29.7511441 L210.756375,29.7511441 L210.756375,24.6110424 L226.680094,24.6110424 Z M192.009234,36.2378051 L179.034,19.5724492 L173.782281,19.5724492 L173.782281,45.4099492 L179.053484,45.4099492 L179.053484,28.1813559 L192.926359,45.4099492 L197.542797,45.4099492 L197.542797,19.5724492 L192.008781,19.5724492 L192.008781,36.2378051 L192.009234,36.2378051 Z" id="Shape" fill="#FFFFFF">
                  </path>
                </svg>
                <p className='font-semibold'> Play online, access classic NES™ and Super NES™ games, and more with a Nintendo Switch Online membership. </p>
                <p className='font-semibold'> This game supports: 
                  <b className='text-secundary font-semibold border-secundary border-b-2 mx-2 cursor-pointer'>Online Play</b>  
                  <b className='text-secundary font-semibold border-secundary border-b-2 mx-2 cursor-pointer'> Save Data Cloud</b>
                </p>
                <button 
                  className="bg-secundary w-3/12 min-w-[100px] py-1 text-white text-md font-semibold rounded-md hover:scale-110 transition duration-200 hover:bg-red-700"> 
                     
                </button>
            </div>
            <img className='hidden md:block' src={require('./assets/Pro-Controller-Hands.avif')} alt='pro-controller'/>
          </section>
          {/* <MoreGames/> */}
        </main>
        <footer className='mt-32'>
          <Footer/>
        </footer>
    </>
  );
}

export default App;
