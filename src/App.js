import React, { useEffect, useState } from "react";
import { apiUrl } from "./data";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
const App = () => {
  const [category, setCategory] = useState("All")
  const [courses, setCourses] = useState({})
  function getCourses(){
    if (category==="All"){
      return Object.values(courses).flat()
    }
    else{
      return courses[category] || [];
    }
  }
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.data);
      });
  }, []);
  return (<div className="main">
    <Navbar category={category} setCategory={setCategory}/>
    <div className="cardContainer">
      {getCourses().map((course)=>(<Card key={course.id} course={course}/>))}
    </div>
  </div>);
};

export default App;
