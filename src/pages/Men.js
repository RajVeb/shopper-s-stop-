
import Slider from "../Components/Slider";
import { Carousel, CloseButton, Container } from "react-bootstrap";
import '../App.css';
import tshirts from '../Mens/tshirts.webp';
import  shirts from '../Mens/shirts.webp';
import jeans from '../Mens/jeans.webp';
import Wallets from '../Mens/Wallets.webp';
import trousers from '../Mens/trousers.webp';
import luggage from '../Mens/luggage.webp';

import Smartcarousel1 from '../Mens/Smartcarousel1.webp';
import Smartcarousel2 from '../Mens/Smartcarousel2.webp';
import Smartcarousel3 from '../Mens/Smartcarousel3.webp';
import Smartcarousel4 from '../Mens/Smartcarousel4.webp';

import SpotlightBrands from '../Mens/SpotlightBrands.webp';

import LP from '../Mens/LP.webp';
import jack from '../Mens/jack.webp';
import FCUK from '../Mens/FCUK.webp';
import spykr from '../Mens/spykr.webp';
import ucbss from '../Mens/ucbss.webp';
import wrangler from '../Mens/wrangler.webp';

import LatestTrends from '../Mens/LatestTrends.webp';


import ColourBlocked from '../Mens/ColourBlocked.webp';
import neutralshades from '../Mens/neutralshades.webp';
import SummerStyle from '../Mens/SummerStyle.webp';
import StreetWear from '../Mens/StreetWear.webp';
import ProductSample from "../ProductSample";
import { BrowserRouter, Link } from 'react-router-dom';
import {Route, Routes } from 'react-router-dom';
function Men(){
    return(
        <div>
    
            <div className="mens-main">
                    <Link to='/ProductSample'>
                    <img
                    className="mens"
                    src={tshirts}
                    alt="tshirts"
                    />
                    </Link>

                    <img
                    className="mens"
                    src={shirts}
                    alt="shirt"
                    />


                    <img
                    className="mens"
                    src={ jeans}
                    alt="jeans"
                    />        

                    <img
                    className="mens"
                    src={ trousers}
                    alt="trousers"
                    />        


                    <img
                    className="mens"
                    src={ Wallets}
                    alt="Wallets"
                    />        


                    <img
                    className="mens"
                    src={ luggage}
                    alt="luggage"
                    />        
            
            </div>
            <Routes>
            <Route path="/ProductSample" element={<ProductSample/>} />
            </Routes>
      
{/* -------------------------------------------------Smartcarousel-------------------------------------------------------------------- */}
            
            <div className="Smartcarousel">
            <Container>
            <Slider img1={Smartcarousel1} img2={Smartcarousel2} img3={Smartcarousel3} img4={Smartcarousel4}/>
            </Container>
            </div>

{/* -------------------------------------------------SPOTLIGHT BRANDS-------------------------------------------------------------------- */}
            
           <div className="spotlight">
                    <img
                    className="SpotlightBrands"
                    src={ SpotlightBrands}
                    alt="slb"
                    /> 
           </div>

           <div className="sib">
               <img
               className="Bbrand"
               src={FCUK}
               alt="brands"
               />
                <img
               className="brand"
               src={jack}
               alt="brands"
               />
                <img
               className="brand"
               src={LP}
               alt="brands"
               />
                <img
               className="brand"
               src={spykr}
               alt="brands"
               />
                <img
               className="brand"
               src={wrangler}
               alt="brands"
               />
                <img
               className="brand"
               src={ucbss}
               alt="brands"
               />
            </div>

            <div className="LatestTrends">
                    <img
                    className="LatestTrends"
                    src={LatestTrends}
                    alt="slb"
                    /> 
           </div>


            <div className="LT">
            <img
               className="mpi"
               src={ColourBlocked}
               alt="poster"
               />
               <img
               className="mpi"
               src={neutralshades}
               alt="poster"
               />
               <img
               className="mpi"
               src={SummerStyle}
               alt="poster"
               />
               <img
               className="mpi"
               src={StreetWear}
               alt="poster"
               />
            </div>











        </div>
    )
}

export default Men;