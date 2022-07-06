//---------------Carousel-1---------------------------->
import { Carousel, Container } from "react-bootstrap";
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.gif';
//---------------Carousel-2---------------------------->
import Keepexploring from './images/Keepexploring.gif'
import offer1 from './images/offer1.webp';
import offer2 from './images/offer2.webp';
import offer3 from './images/offer3.webp';

//-----------------mens-------------------------------->
import allen from './images/allen.webp';
import celio from './images/celio.webp';
import jj from './images/jj.webp';
import rare from './images/rare.webp';
import uspa from './images/uspa.webp';
import wrangler from './images/wrangler.webp';
import mpi1 from './images/mpi1.webp';
import mpi2 from './images/mpi2.webp';
import mpi3 from './images/mpi3.webp';
import mpi4 from './images/mpi4.webp';
// --------------------women---------------------------->
import rarewo from './images/rarewo.webp';
import sera from './images/sera.webp';
import janasya from './images/janasya.webp';
import faballey from './images/faballey.webp';
import yuris from './images/yuris.webp';
import varanga from './images/varanga.webp';
import wpi1 from './images/wpi1.webp';
import wpi2 from './images/wpi2.webp';
import wpi3 from './images/wpi3.webp';
import wpi4 from './images/wpi4.webp';
// --------------------kids--------------------------------->
import and from './images/and.webp';
import vastramay from './images/vastramay.webp';
import mothercare from './images/mothercare.webp';
import mamma from './images/mamma.webp';
import allensolly from './images/allensolly.webp';
import cutecumber from './images/cutecumber.webp';
import kpi1 from './images/kpi1.webp';
import kpi2 from './images/kpi2.webp';
import kpi3 from './images/kpi3.webp';
import kpi4 from './images/kpi4.webp';
// ----------------------last------------------------------->
import printpage from './images/printpage.webp';
import Printpattern from './images/PrintPattern.gif';
import features from './images/features.webp';
import './App.css';
import Slider from "./Components/Slider";
import { icon } from "@fortawesome/fontawesome-svg-core";
function Home(){
    return(
        <div className="">
          <Slider img1={img1} img2={img2} img3={img3}/>

                <div className="brandslogo">
                    <img
                    className="pic4"
                    src={img4}
                    alt="Gif img"
                    />
                </div>
                {/* <!  ----------------------------------------mens------------------------------------------> */}
               <div className="menheading">
               <h2>FOR MEN</h2>
               </div>
               <div className="mensbrand">
               <img
               className="brand"
               src={allen}
               alt="brands"
               />
                <img
               className="brand"
               src={jj}
               alt="brands"
               />
                <img
               className="brand"
               src={rare}
               alt="brands"
               />
                <img
               className="brand"
               src={celio}
               alt="brands"
               />
                <img
               className="brand"
               src={wrangler}
               alt="brands"
               />
                <img
               className="brand"
               src={uspa}
               alt="brands"
               />
            </div>
            <div className="menposter">
            <img
               className="mpi"
               src={mpi1}
               alt="poster"
               />
               <img
               className="mpi"
               src={mpi2}
               alt="poster"
               />
               <img
               className="mpi"
               src={mpi3}
               alt="poster"
               />
               <img
               className="mpi"
               src={mpi4}
               alt="poster"
               />
            </div>
 {/* <!  ----------------------------------------women------------------------------------------> */}
               <div className="womenheading">
               <h2>FOR WOMEN</h2>
               </div>
               <div className="womensbrand">
               <img
               className="brand"
               src={rarewo}
               alt="brands"
               />
                <img
               className="brand"
               src={sera}
               alt="brands"
               />
                <img
               className="brand"
               src={varanga}
               alt="brands"
               />
                <img
               className="brand"
               src={yuris}
               alt="brands"
               />
                <img
               className="brand"
               src={janasya}
               alt="brands"
               />
                <img
               className="brand"
               src={faballey}
               alt="brands"
               />
            </div>
            <div className="womenposter">
            <img
               className="wpi"
               src={wpi1}
               alt="poster"
               />
               <img
               className="wpi"
               src={wpi2}
               alt="poster"
               />
               <img
               className="mpi"
               src={wpi3}
               alt="poster"
               />
               <img
               className="mpi"
               src={wpi4}
               alt="poster"
               />
            </div>
{/* <!  ----------------------------------------KIDS------------------------------------------> */}
               <div className="kidsheading">
               <h2>FOR KIDS</h2>
               </div>
               <div className="kidsbrand">
               <img
               className="brand"
               src={cutecumber}
               alt="brands"
               />
                <img
               className="brand"
               src={allensolly}
               alt="brands"
               />
                <img
               className="brand"
               src={mamma}
               alt="brands"
               />
                <img
               className="brand"
               src={and}
               alt="brands"
               />
                <img
               className="brand"
               src={mothercare}
               alt="brands"
               />
                <img
               className="brand"
               src={vastramay}
               alt="brands"
               />
            </div>
            <div className="kidsposter">
            <img
               className="kpi"
               src={kpi1}
               alt="poster"
               />
               <img
               className="kpi"
               src={kpi2}
               alt="poster"
               />
               <img
               className="kpi"
               src={kpi3}
               alt="poster"
               />
               <img
               className="kpi"
               src={kpi4}
               alt="poster"
               />
            </div>
{/* -------------------------------------Carousel2---------------------------------------------- */}
              <div className="offer">
               <img
               className="keepexploring"
               src={Keepexploring}
               alt="gif"
               /> 
               </div>
            <div>
                <Container>
               
            <Slider img1={offer1} img2={offer2} img3={offer3}/>
            </Container>
            </div>
{/*--------------------Last --------------------------- */}
 
<div className="Printpattern">
              <img
               className="lastcontent"
               src={Printpattern}
               alt="webp"
               /> 
            </div>

<div className="lastcontent">       
           
            <Container>
         
              <img
               className="lastcontent"
               src={printpage}
               alt="gif"
               />
            </Container>


</div>

            <div className="last">
               
               <img
               className="last"
               src={features}
               alt="gif"
               />
               
            </div>

               </div>
            


    )
}




export default Home;