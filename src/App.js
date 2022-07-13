import {
    BrowserRouter,
    Routes,
    Route,

} from "react-router-dom";

import Home from './pages/home/Home'
import PagesMovie from './pages/pagesMovie/PagesMovie'
import PageSearch from "./pages/pageSearch/PageSearch"
import PageFilters from './pages/pageFilters/PageFilters'

import Header from './UI/header/Header'


import './App.scss'


const App = () => {


    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:movieId" element={<PagesMovie/>} />
                    <Route path="/search" element={<PageSearch/>} />
                    <Route path="/filters" element={<PageFilters/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
