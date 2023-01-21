import { useEffect, useState } from 'react';
import './Favourites.css'
import Favourites1 from './Favourites1';


const Favourites = () => {
    //     let movies =[
    //         {
    //             title:"Kantara",
    //             genre:"Adventure",
    //             rating: 5,
    //             id:1
    //         },
    //         {
    //             title:"Money Heist",
    //             genre:"Thriller",
    //             rating: 4,
    //             id:2
    //         },
    //         {
    //             title:"KGF",
    //             genre:"Action/Thriller",
    //             rating: 4,
    //             id:3
    //         },
    //         {
    //             title:"RRR",
    //             genre:"Action/Drama",
    //             rating: 4,
    //             id:4
    //         },
    //         {
    //             title:"Charlie",
    //             genre:"Action/Thriller",
    //             rating: 4,
    //             id:5
    //         },
    //     ]


    let [moviesData, setMoviesData] = useState([]);
    let handleDelete = (id, id2) => {
        let r = fetch(`http://localhost:4000/movies/${id}`, {
            method: 'DELETE'
        })
        alert(`${id2} is deleted sucessfully`);
    }
    useEffect(() => {
        //write code get data from server
        let fetchData = (async () => {
            let response = await fetch('http://localhost:4000/movies')
            console.log(response);
            let data = await response.json();
            console.log(data)
            setMoviesData(data);
        })
        fetchData();
        console.log('use effect work fine.....!')
    },[])
    return (
        <div className="favourites">
            <Favourites1 data={moviesData} fn={handleDelete} title="Favourites Movies and Tv Shows" />
            <Favourites1 data={moviesData.filter((x) => x.language == "Kannada")} fn={handleDelete} title="Kannada Movies" />
        </div>
    );
}
export default Favourites;


//



// ROUTING: DIVIDING ONE PAGE INTO MULTIPLE SECTION AND REDIRECTING
// npm install react-router-dom@6


//no dependancy =>intial render of the page not the time updating
//