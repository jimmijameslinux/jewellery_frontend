import React from 'react'
import collectionlogo from '../assets/collectionlogo.png'
import '../components/Collection.css'
import swarnaleela from '../assets/swarnaleela.png'
import navya from '../assets/navya.png'
import celestia from '../assets/celestia.png'

const Collection = () => {
    return (
        <>
            <div className='collectionentry'>
                <hr />
                <div className="collectiontextlogo">
                    <img src={collectionlogo} alt="" />
                    <h4>OUR COLLECTION</h4>
                </div>
                <hr />
            </div>

            <h3 className='collectionglow'>The Latest Expressions of Luxury, Just Arrived</h3>

            <div className="imgcontainer">
                <div className="left">
                    <img src={swarnaleela} alt="" />
                    <p>SwarnaLeela</p>
                </div>
                <div className="right">
                    <div className="top">
                        <img src={navya} alt="" />
                        <p>Necklace of Navya</p>

                    </div>
                    <div className="bottom">
                        <img src={celestia} alt="" />
                        <p>Celestia</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection