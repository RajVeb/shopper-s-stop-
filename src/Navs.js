
import { Fragment } from 'react';
import {Route, Routes } from 'react-router-dom';
import Kids from './pages/Kids';
import Men from './pages/Men';
import Women from './pages/Women';
import Home from './Home';
function Navs(){
    return(
       <>
       <Routes>
       <Route path="/home" element={<Home/>} />
       <Route path="/mens" element={<Men />} />
       <Route path="/women" element={<Women/>} />
       <Route path="/kids" element={<Kids />} />
       <Route path="/" exact={true} element={<Home />} />
       </Routes>
       </>
    )
}

export default Navs;