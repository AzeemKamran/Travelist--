import React, { useEffect, useState } from 'react'
import './styles/body1.css'
import {Link} from 'react-router-dom'
import { FiTrendingUp } from "react-icons/fi";
import Body2 from './Body2';
const Body1 = ({optionclick}) => {

    const [pics, setpics] = useState([]);
    useEffect( ()=>{
        const fetchapi = async ()=>{
            let api = await fetch("https://api.unsplash.com/photos/random?count=10&query=places&client_id=pF6hJCn1D4wXWECXvBLlV072U9r8Cu6K4hnzgwIZ1_U")
            let res = await api.json()
            let newarr = res.filter((item)=>{
                return item.location.name != null;
            })
           setpics(newarr)   
           console.log(newarr)
        };
        fetchapi();
    } , []);
    const click = (option) => {
        optionclick(option);
    };

    return (
        <div className='body-1'>

            <section className='text-content'>
                <h1>Travelist -</h1><h2>World's leading platform</h2>
                <p>Welcome to Wanderlust, your gateway to the world's most breathtaking destinations! Dive into our curated collection of stunning images and inspiring travel ideas, designed to ignite your wanderlust and guide you to the most beautiful places on Earth</p>
            </section>

            <section className="trending">

                <div className="heading">
                    <h1>Trending searches</h1> <div className="logo"> <FiTrendingUp></FiTrendingUp></div>
                </div>

                <div className="places">
                    {
                        pics.map((place) => {
                        return<Link onClick={() => click(place)} to="selectedplace">
                                    <div key={place.id} className="card">
                                    <img src={place.urls.small} />
                                    <h2>{place.location.name || "no name"}</h2>
                                    </div>
                                </Link>
                             
                        })
                    }
                </div>

            </section>

            <Body2></Body2>
        </div>
    )
}

export default Body1
