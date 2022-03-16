import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import Details from '../pages/Details/Details';
import Pokedex from '../pages/Pokedex/Pokedex';


const Routers = () => { 
    return(

    <BrowserRouter>
    <Routes> 
        <Route  path="/" element={<HomePage/>}/>
        <Route  path="/pokedex" element={<Pokedex/>}/>
        <Route  path="/:id" element={<Details/>}/>
    </Routes>
    </BrowserRouter>
    )
}

export default Routers; 