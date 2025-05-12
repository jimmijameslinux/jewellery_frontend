import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import lineart from '../assets/lineart.png';
import '../components/Trending.css';
import radiantjewellery from '../assets/radiantjewellery.png';
import blossomjewellery from '../assets/blossomjewellery.png';
import classicjewellery from '../assets/classicjewellery.png';
import diamondjewellery from '../assets/diamondjewellery.png';
import indianarttraditional from '../assets/indianarttraditional.png';
import logobig from '../assets/logobig.png';
import certificate from '../assets/certificate.png';
import promisejewellery from '../assets/promisejewellery.png';
import rupee from '../assets/rupee.png';
import invest from '../assets/invest.png';
import { q } from 'framer-motion/client';

const Trending = () => {
    const [addToCart, setAddToCart] = useState([]); // Store the cart items
    const [addedItems, setAddedItems] = useState(new Set()); // Track added items by their IDs
    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            img: radiantjewellery,
            title: 'Radiant Halo Studs',
            desc: 'Where brilliance meets elegance.',
            price: '4999',
            crossedPrice: '5999',
            quantity: 1,
        },
        {
            id: 2,
            img: blossomjewellery,
            title: 'Golden Blossom Earrings',
            desc: 'A floral touch of timeless beauty',
            price: '4999',
            crossedPrice: '5999',
            quantity: 1,
        },
        {
            id: 3,
            img: classicjewellery,
            title: 'Classic Cluster Studs',
            desc: 'Everyday sparkle with a refined twist.',
            price: '4999',
            crossedPrice: '5999',
            quantity: 1,
        },
        {
            id: 4,
            img: diamondjewellery,
            title: 'Diamond Glimmer Duos',
            desc: 'Tiny treasures, bold brilliance.',
            price: '4999',
            crossedPrice: '5999',
            quantity: 1,
        }
    ];

    useEffect(() => {
        // Load cart data from localStorage
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setAddToCart(storedCart);
    
        // Build the set of already added product IDs
        const initialAddedItems = new Set(storedCart.map(item => item.id));
        setAddedItems(initialAddedItems);
    
        // Intersection Observer logic (unchanged)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
    
        const items = document.querySelectorAll('.trending, .trendingitem, .trendinghorimg, .jewelimgpromises');
        items.forEach(item => observer.observe(item));
    
        return () => {
            items.forEach(item => observer.unobserve(item));
        };
    }, []);
    

    const handleAddToCart = (product) => {
        // Check if the item is already in the cart
        if (!addedItems.has(product.id)) {
            // Update cart items and add the product ID to the set
            const updatedCart = [...addToCart, product];
            setAddToCart(updatedCart);
            setAddedItems(prevAddedItems => new Set(prevAddedItems).add(product.id)); // Add the product ID to the set
            
            // Store updated cart in localStorage
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            
            // Optionally, navigate to the cart page
            navigate('/cart', { state: { cartItems: updatedCart } });
        }
    };

    return (
        <>
            <div className="trendingtop" id='trendingtop'>
                <div className="trending" id='trending'>
                    <svg className="tri" width="300" height="300" viewBox="0 -80 300 300" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 10 190 Q 100 140 150 -60 Q 200 140 290 190 Z" fill="#F6F1EB" />
                    </svg>
                    <img src={lineart} alt="Line Art" className="responsive-img line" />
                    <h1>TRENDING</h1>
                    <img src={lineart} alt="Line Art" className="responsive-img line" />
                    <svg className="tri2" width="300" height="300" viewBox="0 -80 300 300" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 10 190 Q 100 140 150 -60 Q 200 140 290 190 Z" fill="#F6F1EB" />
                    </svg>
                </div>
                <div className="trendingitems">
                    {products.map((product) => (
                        <div key={product.id} className="trendingitem">
                            <div className="itemimage">
                                <img src={product.img} alt={product.title} />
                            </div>
                            <h3 className="itemtitle">{product.title}</h3>
                            <p className="itemdescription">{product.desc}</p>
                            <div className="ratingwithstars">
                                <div className="stars">⭐⭐⭐⭐⭐</div>
                                <div className="totalreviews">1000+ reviews</div>
                            </div>
                            <div className="price">
                                <div className="crossedprice">₹{product.crossedPrice}</div>
                                <div className="originalprice">₹{product.price}</div>
                            </div>
                            <button
                                className={addedItems.has(product.id) ? 'addtocartbtndisable' : 'addtocartbtn'}
                                onClick={() => handleAddToCart(product)}
                                disabled={addedItems.has(product.id)} // Disable button if item is already added
                            >
                                {addedItems.has(product.id) ? 'Added to Cart' : 'Add to Cart'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="trendinghorimg" id='trendinghorimg'>
                <hr className="trendinghor"/>
                <div className="artcombined">
                    <img className="indianarttraditional" src={indianarttraditional} alt="indianarttraditionalimg" />
                    <img className="indianarttraditional2" src={indianarttraditional} alt="indianarttraditionalimg2" />
                </div>
            </div>
            <div className="jewelimgpromises" id='jewelimgpromises'>
                <div className="jewelimg">
                    <img src={logobig} alt="logobig" />
                    <p>Crafting Purity, Celebrating Prosperity</p>
                </div>
                <hr className="promisehr" />
                <div className="promises">
                    <h4>
                        <span className="span1">Saubhagya</span>
                        <span className="span2">Promises</span>
                    </h4>
                    <div className="littlepromises">
                        <div className="prom">
                            <img src={certificate} alt="certificate" />
                            <p>The Purity Guarantee</p>
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
                            <p>The Purity Guarantee</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Trending;
