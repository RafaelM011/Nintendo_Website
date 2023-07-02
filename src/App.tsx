import React from 'react';
import { FixedNavBar } from './components/FixedNavBar/FixedNavBar';
import { GameDisplay } from './components/GameDisplay/GameDisplay';
import data from "./mocks/data.json";

function App() {
  return (
    <>
        <FixedNavBar/>
        <div className='flex gap-2 justify-center text-md items-center py-2 bg-[#F8F8F8]'>
            <div className='border-r-2 border-main pr-4 h-fit'>
              <b>Free shipping</b> on orders $50 or more. <u>Restrictions apply.</u>
            </div>
            <div className=''>
              Earn <b><u>My Nintendo Points</u></b> on digital games
            </div>
        </div>
        <main>
          <GameDisplay gameData={data}/>
        </main>
        <footer>
          
        </footer>
    </>
  );
}

export default App;
