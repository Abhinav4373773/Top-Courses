import React from 'react'
// import data from '../data'
import { filterData } from '../data'
const Navbar = ({category,setCategory}) => {
    
  return (
    <div className='nav'>
        <h1 className='NavHeading'>Top Courses</h1>
        <div className='buttonbox'>
            {filterData.map((cat)=>(
                <button className={`buttons ${category===cat.title ? "active" : ""}`} onClick={()=>setCategory(cat.title)} key={cat.id}>{cat.title}</button>
            ))}
        </div>
    </div>
  )
}

export default Navbar