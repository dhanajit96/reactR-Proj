import './App.css'
import Navbar from './navbar';
import Home from './home';
import Favourites from './Favourites'
import Footer from './Footer';
import AddFavourites from './AddFavourites';
// import Practice from './Practice'
import PageNotFound from './PageNotFound'
import Users from './Users'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App = ()=>{
    return(
       <div className="App">
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/favourites" element={<Favourites />}></Route>
                <Route path="/addfavourites" element={<AddFavourites />}></Route>
                <Route path="/users" element={<Users />}></Route> 
                <Route path="*" element={<PageNotFound />} ></Route>
            </Routes>
       <Footer /> 
       </BrowserRouter> 
        
       </div>
       );
    }
export default App;