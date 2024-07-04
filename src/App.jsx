import React from 'react';
import Navbar from './navbar';
import Maintask from './Maintask';
import Maintimer from './Maintimer';

const App = () => {
  return (
    <>
      <div className='h-screen' style={{background: 'linear-gradient(115deg, #222222, #000000)'}}>
        <Navbar/>
        <div className='flex  w-11/12 m-auto'>

          <Maintimer/>
          <Maintask/>
        </div>
      </div>
    </>
  );
}

export default App;
