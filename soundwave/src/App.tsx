import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import Discover from './Page/Discover';
import Join from './Page/Join';
import NotFound from './Page/NotFound'



function App() {
    return (
     <div>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/discover' element={<Discover />} />
        <Route path='/join' element={<Join />} />
        <Route path='/404:Not Found' element={<NotFound/>} />
     </Routes>
      </div>
     
    )
}

export default App
