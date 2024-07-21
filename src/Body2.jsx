import React from 'react'
import './styles/body2.css'
const Body2 = () => {
  return (
    <div className='body-2' >
      <h1>Share your experiences</h1>

        <section className="review-cards">

            <div className="card-review">
                <div className="box-1-card">
                    <h2>Name</h2>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.0I07lAl8zIEmIBicLXqLIQHaJ4&pid=Api&P=0&h=220" alt='pic'/>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur quod nulla mollitia consequuntur! Consequatur nobis excepturi neque ipsa, maiores esse aut, atque adipisci a eum sint, error ex unde.</p>
            </div>
        </section>

        <div className="input-box--1">
            <input placeholder='Add your own' type="text" />
            <button>Post</button>
        </div>
    </div>
  )
}

export default Body2
