
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

 function AddFavourites() {

    let navigate = useNavigate();
  // this is useState method of react on function based component
  
    let [title, setTitle] = useState("")
    let [genre, setGenre] = useState("")
    let [language, setLanguage] = useState("")
    let [rating, setRating] = useState("")

    let data = { title, genre, language, rating }

    let handleSubmit = (e) => {
        e.preventDefault() //prevents the page from reloading
        fetch(' http://localhost:4000/movies', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        )
        alert('movie is added')
        navigate('/favourites');
    }

    return (

        <div className='d-flex justify-content-center'>

            <div className="container w-25 border border-light-8 m-3 " >
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" value={title} onChange={(e) => setTitle(e.target.value)} />

                    <label htmlFor="exampleFormControlInput1" className="form-label">Genre</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" value={genre} onChange={(e) => setGenre(e.target.value)} />

                    <label htmlFor="exampleFormControlInput1" className="form-label">Language</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" value={language} onChange={(e) => setLanguage(e.target.value)} />

                    <label htmlFor="exampleFormControlInput1" className="form-label">Rating</label>
                    <input type="type" min="1" max="5" className="form-control" id="exampleFormControlInput1" value={rating} onChange={(e) => setRating(e.target.value)} />
                    {/* <input className='btn btn-primary my-3' value="Add to Favourite" /> */}
                    <button className='btn btn-primary my-3'>Add To Favourite</button>
                </form>
              
            </div>

        </div>

    )
}
export default AddFavourites;
