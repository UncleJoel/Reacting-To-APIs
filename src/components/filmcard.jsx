import React from 'react';

const FilmCard = (props => {
    return (
        <>
            <div className='container-fluid text-white content-center'>
                {props.films.map((film, index) => {
                    return (
                        <div key={index} className='card border-info round d-inline-flex bg-dark col-3 m-5 '>
                            <div className='card-header border-info text-center '>{film.title}</div>
                            <div className='card-body'>
                                <p className='card-text'>{film.description}</p>
                                <p className = 'card-foot'>Director: {film.director}</p>
                                <p>{film.release_date}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
})

export default FilmCard;