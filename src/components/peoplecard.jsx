import React from 'react';



const PeopleCard = (props => {
    return (
        <>
            <div className='container-fluid text-white content-center'>
                {props.people.map((people, index) => {
                    return (
                        <div key={index} className='card border-info round d-inline-flex bg-dark col-3 m-5 '>
                            <div className='card-header border-info text-center '>{people.name}</div>
                            <div className='card-body'>
                                <p className='card-age'>Age: {people.age}</p>
                                <p className='card-gender'>Gender: {people.gender}</p>
                                <a className='btn-info p-2 rounded' target='_blank' href={people.url}>JSON.id</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
})

export default PeopleCard;