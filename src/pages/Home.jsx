import React from 'react'
import homecontentleft from '../assets/homecontentleft.png'
import jewellerynecklace from '../assets/jewellerynecklace2.png'
import jewellerywomen from '../assets/jewellerywomen.png'

import '../pages/Home.css'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className="homecontentleft">
          <h1>
            Moments That Sparkle Across Generations
          </h1>
          <p>In every sparkle lies a story of love passed down, of moments
            shared, of memories wrapped in tradition. Celebrate the unspoken
            <br />
            bond between mother and daughter with
            <br />
            jewelry that speaks across generations.
          </p>
          <div className="btns">
            <button className='btn1'>ORDER NOW</button>
            <button className='btn2'>ADD TO CART</button>
          </div>
          <div className="homecontentleftimage">
            <img src={homecontentleft} alt="homecontentleft" className="img-left" />
          </div>
        </div>
        <div className="homecontentrightimage">
          <img src={jewellerywomen} alt="jewellerywomen" className="img-women" />
          <img src={jewellerynecklace} alt="jewellerynecklace" className="img-necklace" />
        </div>
        {/* <div className="clipped-shape">
        
      </div> */}
      </div>
      <Trending />
    </>
  )
}

export default Home