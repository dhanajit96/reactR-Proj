import './home.css' 
import spider from './spider.jpg'
import first from './img1.jpg'
import second from './img2.jpg'
import third from './img3.jpg'
import fourth from './img4.jpg'
import fifth from './img5.jpg'
const home = () => {
    let images =[
 {img : first},
 {img : second},
 {img : third},
 {img : fourth},
 {img :fifth}
    ]
    return(
        <div className="home">
            <div className="poster">
                <img src={spider} alt="" />
            </div>
            <div className="movies">
               {images.map((data)=>(
                        <img src= {data.img} />
               ))

               }
            </div>
        </div>
    );
}
export default home;
