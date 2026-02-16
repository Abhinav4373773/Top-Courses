import React, { useState } from 'react'

const Card = ({course}) => {
    const [readmore, setReadmore] = useState(false)
  return (
    <div>
        <div className='card'>
            <img src={course.image.url} alt={course.image.alt}/>
            <h6 className='cardTitle'>{course.title}</h6>
            <p>{readmore ? course.description : course.description.substring(0,100)+"..."}<span onClick={()=>(setReadmore(!readmore))}>{readmore?"less":"more"}</span></p>
        </div>
    </div>
  )
}

export default Card