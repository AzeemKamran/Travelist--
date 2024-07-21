import React , {useContext, useEffect, useState} from 'react'
import './styles/selectedplace.css'
import { FcLike } from "react-icons/fc";
import {Link} from 'react-router-dom'
import { FaArrowAltCircleLeft } from "react-icons/fa";
const Selectedplace = ({place , save}) => {
    const [count, setCount] = useState(0);
    console.log(place , count)
    const [images, setImages] = useState([]);
    const [name, setname] = useState()
    const [placename , setplacename] = useState({
        des:"",
        update:"",
        para:""
    })
    useEffect(()=>{
        if(place){
        setname(place.name ? place.name : place.location.city ? place.location.city : place.location.name)
        console.log(name)
        const callplace = async ()=>{
            let data  = await fetch(`https://api.unsplash.com/search/photos?query=${ name}&client_id=pF6hJCn1D4wXWECXvBLlV072U9r8Cu6K4hnzgwIZ1_U`)
            let res= await data.json()
            // console.log(res)
            const imageUrls = res.results.map(result => {
                return result.urls.small
            });
            let placedetails = res.results[0]
            setplacename({
                des:placedetails.description ? placedetails.description : placedetails.alt_description,
                update:placedetails.updated_at,
                likes:placedetails.likes,
                para:placedetails.slug ? placedetails.slug : placedetails.alternative_slugs.en

            })
            imageUrls.splice(5, 5)
            setImages(imageUrls)
            // console.log(imageUrls)  

            const handle = () => setCount(count + 1);
            window.addEventListener("pointermove", handle);
            return () => window.removeEventListener('pointermove', handle);
          
}
callplace()
 }

    }, [count])

    const changedata = () => {
      setCount(0)
      setImages([])
      setname(null)
      setplacename(null)
    }
    
  return (
    <div className='selected-place'>
        <Link onClick={changedata} to="/" ><FaArrowAltCircleLeft/></Link>
        <div className="box-1">
            <div className="place-details">
                <h1>{name}, { place.countryName ? place.countryName :place.location.country} </h1>
                <ul>
                    <li>Location : { placename.des}</li>
                    <li> <FcLike/> <b> {placename.likes} </b> </li>
                    <li>update : {placename.update} </li>
                </ul>
                <div className="btns">
                    <button>Maps</button>
                    <button>Hotels</button>
                    <button onClick={(e) => save(place , e)} >Save</button>
                </div>
            </div>

<div className="box-2">
    <h1>{name},  {place.countryName ? place.countryName :place.location.country}</h1>
            <div className="place-pics">
                {images &&
                    images.map((url)=>{
                        return <img src={url} />
                    })
                }
                
            </div>
            <div className="paragraph">
                    <p>{placename.para} </p>
                </div>
</div>

        </div>
                
        
    </div>
  )
}

export default Selectedplace
