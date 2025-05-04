import React from 'react'
import lineart from '../assets/lineart.png'
import '../components/Trending.css'
import radiantjewellery from '../assets/radiantjewellery.png'

const Trending = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh",flexDirection: "column",marginTop:"10rem",rowGap:"2rem" }}>
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
                {/* 3 */}
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
                {/* 4 */}
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
            </div>
        </div>
    )
}

export default Trending