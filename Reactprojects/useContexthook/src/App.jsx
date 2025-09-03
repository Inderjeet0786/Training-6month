

import React, { createContext, useContext, useState } from 'react'
import Component1 from './Component1';
import Component2 from './Component2';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light')

  const ChangeTheme = () => {
    setTheme(theme == 'light' ? 'dark' : 'light');
  }

  const image1 = 'https://th.bing.com/th/id/R.13820971a962ffbeb63a8fef36185b16?rik=vZ3lu%2blbhy6jxw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f03%2f10%2f319576-photography-landscape-nature-water-grass-trees-plants-sunrise-lake.jpg&ehk=6WS2p9KknQa9F%2bgAH16n44NReuUyS2rzXah2zy7kiAw%3d&risl=&pid=ImgRaw&r=0'
  const image2 = 'https://img.freepik.com/premium-photo/small-cabin-mountain-with-lake-background_865967-115618.jpg'



  return (
    <>
      <ThemeContext.Provider value={{ theme, ChangeTheme }}>

        <div

          style={{
            backgroundColor: theme === 'light' ? 'white' : 'black',
            color: theme == 'light' ? 'black' : 'white',
            minHeight: '100vh',
            padding: '20px'

          }}>
            <img src={theme=='light'?image1:image2} style={{width:'200px'}}/>

          <Component1 />
          <Component2 />
        </div>



      </ThemeContext.Provider>
    </>
  )
}

export default App

