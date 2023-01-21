import React from 'react'

export default function Favourites1(props) {
    let moviesData = props.data;
    let handleDelete = props.fn
    let title = props.title

    
  return (
    <>
    
    <div className='newFavourites'>
    <h1>{title}</h1>
        {moviesData.map( (data)=>(
        <div className="fav_lists">
            <h2>{data.title}</h2>
                    <p>{data.genre}</p>
                    <p>{data.rating}</p>
                    <button className="btn btn-primary" onClick={()=>handleDelete(data.id , data.title)}>Delete</button>
                    </div>
                ) )
        }
            
  </div>
  </>)
        }
