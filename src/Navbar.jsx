import React, { useEffect, useState, useContext } from 'react'
import Body1 from './Body1'
import './styles/navbar.css';
import {Link , Outlet} from 'react-router-dom'
const Navbar = ({place}) => {
const [selectplace , setselectplace] = useState();
const [query, setQuery] = useState('');
const [suggestions, setSuggestions] = useState([]);

const handleInputChange = async (e) => {
  const value = e.target.value;
  setQuery(value);
  if (value.length > 2) {
    try {
      const response = await fetch(`http://api.geonames.org/searchJSON?q=${value}&maxRows=7&username=azeembhai`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSuggestions(data.geonames);
    } catch (error) {
      console.error('Error fetching place data:', error);
    }
  } else {
    setSuggestions([]);
  }
};

  const optionclick = (option) => {
    setselectplace(option)
    console.log(selectplace)
    setSuggestions([])
    place(option)
    setQuery("")
  }
    return (
      <>
        <div className='navbar' >
            <img src="https://tse3.mm.bing.net/th?id=OIP.EmaEBzw-wjdf-uvZe5xFaAHaDb&pid=Api&P=0&h=220" />
            <div className="input-box">
            <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a place"
      />
      {suggestions.length > 0 && (
        <ul className='list'>
          {suggestions.map((suggestion) => (
            <Link to="selectedplace" onClick={()=> optionclick(suggestion)} key={suggestion.geonameId} >
              <li  className='search-option' >{suggestion.name}, {suggestion.countryName}</li>
            </Link>
          ))}
        </ul>
      )}
            </div>
            <div className="third-box">
                <select>
                    <option>Eng</option>
                    <option>Urdu</option>
                    <option>French</option>
                </select>
                <Link to="saved" ><button>saved</button></Link>
            </div>
      
        </div>
        <Outlet></Outlet>
        </>
    )
}

export default Navbar
