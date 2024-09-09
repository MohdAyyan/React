import React from 'react'

function Card({ item }) {

    const { Poster, Title, imdbID } = item;
    return (

        <li>
                      <div>
                         <div>
                    <img src={Poster} alt={imdbID} />
                                 </div>
                             <div>
                    <a href={`/movie/${imdbID}`} />
                    <button>Watch Now</button>
                </div>
                       </div>
                </li>
    )
}

export default Card