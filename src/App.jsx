
// for react carousels
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { Route,Routes } from 'react-router-dom';

//pages

import HomePage from './Pages/Home.page';
import PlayPage from './Pages/Play.page';
import MoviePage from './Pages/Movie.page';

function App() {
  
  return (
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/movies/:id' element={<MoviePage/>} />
    <Route path='/playit' element={<PlayPage/>} />
    </Routes>
  )
}

export default App
