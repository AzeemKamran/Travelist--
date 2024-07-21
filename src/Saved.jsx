import React, { useState ,useEffect } from 'react'
import { FaTrash } from "react-icons/fa";
import './styles/saved.css'
import {Link} from 'react-router-dom'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { renderToString } from 'react-dom/server';
const Saved = ({items, setitms}) => {
  const [arr, setarr] = useState([])
  const curntdate = new Date();
  useEffect(()=>{
    let places = JSON.parse(localStorage.getItem("places"))
    setarr(places)
  } , [items])

  const remove = (nameToRemove) => {
    const newArray = arr.filter((item) => {
    const itemName = item.name ? item.name : item.location.name;
      return itemName != nameToRemove;
    });
    console.log(newArray)
    setitms(newArray)
    // localStorage.removeItem("places")
    let string = JSON.stringify(newArray)
    localStorage.setItem("places" , string)
  }
  
  return (
    <div className='saved-box'>
        <Link to="/" ><FaArrowAltCircleLeft/></Link>
      <section className="saved-items">
        
        {
          arr.length>0 && arr.map((item) => {
            return <div className="saved">
                      <div className="saved-1">
                        <h1>{item.name ? item.name : item.location.name}  {item.countryName ? item.countryName :""} </h1>
                        {/* <h1>{item.location.city!=null ? item.location.city : item.name} , {item.location.country!= null ? item.location.country: item.countryName ? item.countryName : item.location.name }</h1> */}
                        <h2>{curntdate.getMonth()+1} , {curntdate.getDate()} ,{curntdate.getFullYear()}</h2>
                      </div>
                      <button  onClick={()=> remove(item.name ? item.name : item.location.name)} ><FaTrash /></button>
                    </div>
          })
          
        }
        {
          arr.length == 0 &&
          <div className="no-items">
            <h1>No saved items here</h1>
          </div>
        }

      </section>
    </div>
  )
}

export default Saved
