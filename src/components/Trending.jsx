import React from 'react'
import lineart from '../assets/lineart.png'
import '../components/Trending.css'
import radiantjewellery from '../assets/radiantjewellery.png'
import blossomjewellery from '../assets/blossomjewellery.png'
import classicjewellery from '../assets/classicjewellery.png'
import diamondjewellery from '../assets/diamondjewellery.png'
import indianarttraditional from '../assets/indianarttraditional.png'
import logobig from '../assets/logobig.png'
import certificate from '../assets/certificate.png'
import promisejewellery from '../assets/promisejewellery.png'
import rupee from '../assets/rupee.png'
import invest from '../assets/invest.png'

const Trending = () => {
    return (
        <>
            <div className='trendingtop'>
                {/* <svg width="300" height="150" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
                <path d="
                            M 10 150
                            Q 100 90 150 10
                            Q 200 90 290 150
                            Z"
                    fill="#F6F1EB"/>
            </svg> */}

                <div className="trending">
                    <img src={lineart} alt="Line Art" className="responsive-img line" />
                    <h1>TRENDING</h1>
                    <img src={lineart} alt="Line Art" className="responsive-img line" />
                </div>
                <div className="trendingitems">
                    {/* 1 */}
                    <div className="trendingitem">
                        <div className="itemimage">
                            <img src={radiantjewellery} alt="radiantjewellery" />
                        </div>
                        <h3 className="itemtitle">Radiant Halo Studs</h3>
                        <p className="itemdescription">Where brilliance meets elegance.</p>
                        <div className="ratingwithstars">
                            {/* <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZpcnN0JTIwY29sb3J8ZW58MHx8fHwxNjg5NTQ1MjA5&ixlib=rb-4.0.3&q=80&w=400" alt="Item" className="reatimg" /> */}
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            {/* total reviews */}
                            <div className="totalreviews">1000+ reviews</div>
                        </div>
                        <div className="price">
                            <div className="crossedprice">Rs 5999</div>
                            <div className="originalprice">Rs 4999</div>
                        </div>
                        {/* <div className="addtocartbtn"> */}
                        <button className="addtocartbtn">Add to Cart</button>
                        {/* </div> */}
                    </div>
                    {/* 2 */}
                    <div className="trendingitem">
                        <div className="itemimage">
                            <img src={blossomjewellery} alt="blossomjewellery" />
                        </div>
                        <h3 className="itemtitle">Golden Blossom Earrings</h3>
                        <p className="itemdescription">A floral touch of timeless beauty</p>
                        <div className="ratingwithstars">
                            {/* <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZpcnN0JTIwY29sb3J8ZW58MHx8fHwxNjg5NTQ1MjA5&ixlib=rb-4.0.3&q=80&w=400" alt="Item" className="reatimg" /> */}
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            {/* total reviews */}
                            <div className="totalreviews">1000+ reviews</div>
                        </div>
                        <div className="price">
                            <div className="crossedprice">Rs 5999</div>
                            <div className="originalprice">Rs 4999</div>
                        </div>
                        {/* <div className="addtocartbtn"> */}
                        <button className="addtocartbtn">Add to Cart</button>
                        {/* </div> */}
                    </div>
                    {/* 3 */}
                    <div className="trendingitem">
                        <div className="itemimage">
                            <img src={classicjewellery} alt="classicjewellery" />
                        </div>
                        <h3 className="itemtitle">Classic Cluster Studs</h3>
                        <p className="itemdescription">Everyday sparkle with a refined twist.</p>
                        <div className="ratingwithstars">
                            {/* <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZpcnN0JTIwY29sb3J8ZW58MHx8fHwxNjg5NTQ1MjA5&ixlib=rb-4.0.3&q=80&w=400" alt="Item" className="reatimg" /> */}
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            {/* total reviews */}
                            <div className="totalreviews">1000+ reviews</div>
                        </div>
                        <div className="price">
                            <div className="crossedprice">Rs 5999</div>
                            <div className="originalprice">Rs 4999</div>
                        </div>
                        {/* <div className="addtocartbtn"> */}
                        <button className="addtocartbtn">Add to Cart</button>
                        {/* </div> */}
                    </div>
                    {/* 4 */}
                    <div className="trendingitem">
                        <div className="itemimage">
                            <img src={diamondjewellery} alt="diamondjewellery" />
                        </div>
                        <h3 className="itemtitle">Diamond Glimmer Duos</h3>
                        <p className="itemdescription">Tiny treasures, bold brilliance.</p>
                        <div className="ratingwithstars">
                            {/* <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZpcnN0JTIwY29sb3J8ZW58MHx8fHwxNjg5NTQ1MjA5&ixlib=rb-4.0.3&q=80&w=400" alt="Item" className="reatimg" /> */}
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            {/* total reviews */}
                            <div className="totalreviews">1000+ reviews</div>
                        </div>
                        <div className="price">
                            <div className="crossedprice">Rs 5999</div>
                            <div className="originalprice">Rs 4999</div>
                        </div>
                        {/* <div className="addtocartbtn"> */}
                        <button className="addtocartbtn">Add to Cart</button>
                        {/* </div> */}
                    </div>
                </div>


            </div>
            <div className="trendinghorimg">
                <hr className='trendinghor' />
                <div className="artcombined">
                    <img className='indianarttraditional' src={indianarttraditional} alt='indianarttraditionalimg' />
                    <img className='indianarttraditional2' src={indianarttraditional} alt='indianarttraditionalimg2' />
                </div>
            </div>

            <div className="jewelimgpromises">
                <div className="jewelimg">
                    <img src={logobig} alt="logobig" />
                    <p>Crafting Purity, Celebrating Prosperity</p>
                </div>
                <hr />
                <div className="promises">
                    <h4>
                        <span className='span1'>
                        Saubhagya 
                        </span>
                        <span className='span2'>
                        Promises
                        </span>
                        </h4>
                    <div className="littlepromises">
                        <div className="prom">
                            <img src={certificate} alt="certificate" />
                            <p>The Purity Gurantee</p>
                        </div>

                        <div className="prom">
                            <img src={promisejewellery} alt="promisejewellery" />
                            <p>Every Piece is Brand New</p>
                        </div>

                        <div className="prom">
                            <img src={rupee} alt="rupee" />
                            <p>Transparency in Billing</p>
                        </div>

                        <div className="prom">
                            <img src={invest} alt="invest" />
                            <p>The Purity Gurantee</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Trending