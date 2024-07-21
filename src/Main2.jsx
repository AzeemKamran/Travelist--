import React , {useState} from 'react'
import {createRoutesFromElements,
    createBrowserRouter , 
    Route, RouterProvider
   } from 'react-router-dom';
   import Navbar from './Navbar.jsx'
   import Body1 from './Body1.jsx';
   import Selectedplace from './Selectedplace.jsx'
   
import Saved from './Saved.jsx'
import Footer from './Footer.jsx';

// map api
// https://api.mapbox.com/geocoding/v5/mapbox.places/${countryCode}.json?access_token=${mapboxgl.accessToken}
const Main2 = () => {
const [data , setdata] = useState();
const [items , setItems] = useState([])
      const selectplace = (option) => {
        setdata(option);
        console.log('data', option)
      };
      const savedata = (item , e) => {
        setItems([...items , item])
        localStorage.setItem("places" ,JSON.stringify(items))
        // console.log( 'items from saved data', items);
        e.target.innerText === "Save" ? e.target.innerText="Saved" :e.target.innerText="Save" 
      };
    let router = createBrowserRouter(
        createRoutesFromElements(
          <Route path='' element={<Navbar place={selectplace} ></Navbar>} >
            <Route index element={<Body1 optionclick ={selectplace} place={data} ></Body1>}></Route>
            <Route  path="selectedplace" element={<Selectedplace save={savedata} place={data} />}></Route>
            <Route path='saved' element={<Saved items={items} setitms={setItems} ></Saved>} > </Route>
          </Route>
        )
      )
  return (
    <>
            <RouterProvider router = {router}>
            <Navbar ></Navbar>
            </RouterProvider>
            <Footer></Footer>

    </>
  )
}

export default Main2
