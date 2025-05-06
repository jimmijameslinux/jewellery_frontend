import React, { useEffect, useState } from 'react';
import './Cart.css';
import cartquadart from '../assets/cartquadart.png';
import upper_jewellery from '../assets/upper_jewellery.png';
import lower_jewellery from '../assets/lower_jewellery.png';
import cartflowerart from '../assets/cartflowerart.png';
import downarrow from '../assets/downarrow.png';
import logo from '../assets/logo.png';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            try {
                setCartItems(JSON.parse(storedCart));
            } catch (error) {
                console.error('Invalid JSON in localStorage:', error);
                setCartItems([]);
            }
        }
    }, []);

    // useEffect(() => {
    //     localStorage.setItem('cart', JSON.stringify(cartItems));
    // }, [cartItems]);

    const removeItem = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const increaseQuantity = (id) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id && (item.quantity || 1) > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    // 🧮 Calculate totals
    const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const totalAmount = cartItems.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
        return sum + price * (item.quantity || 1);
    }, 0);

    const discount = 0; // Assuming no discount for now
    const deliveryCharges = 5; // Assuming free delivery for now
    const taxes = 0; // Assuming no taxes for now

    const finalAmount = totalAmount - discount + deliveryCharges + taxes;

    return (
        <div className="cart-container">
            <div className="cartitem">
                <div className="cartitem-top">
                    <div className="images">
                    <img className='upper_jewellery' src={upper_jewellery} alt="" />
                    <img className='lower_jewellery' src={lower_jewellery} alt="" />
                    </div>
                    <div className="contents">
                        <h2 className="heading">CART</h2>
                        <p className="text">Love shopping? We can tell.</p>
                    </div>
                </div>
                <div className="cartitem-bottom">
                    <p className="cartheading">Items in cart</p>
                    <div className="carditems">
                        {cartItems.length > 0 ? (
                            <>
                                {cartItems.map
                                    ((item) =>
                                    (
                                        <div key={item.id} className="carditem">
                                            <button className="remove-btn" onClick={() => removeItem(item.id)}>
                                                X
                                            </button>
                                            <div className="cartitemimg">
                                            <img src={item.img} alt={item.title} className="cart-item-img" />
                                            </div>
                                            <div className="carditemright">
                                                <p className="cardtitle">{item.title}</p>
                                                <p className="carddesc">{item.desc}</p>
                                                <div className="priceandquantity">
                                                    <p className="cardprice">₹{item.price}</p>
                                                        QTY:
                                                    <div className="quantitycontrols">
                                                        <button
                                                            onClick={() => decreaseQuantity(item.id)}
                                                            disabled={(item.quantity || 1) <= 1}
                                                        >
                                                            -
                                                        </button>
                                                        <span>{item.quantity || 1}</span>
                                                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))

                                }
                            </>

                        ) :
                            (
                                <p className="emptycart">Your cart is empty.</p>
                            )
                        }

                    </div>
                </div>
            </div>

            <div className="cartsummary">
                <img src={cartflowerart} alt="cartflowerart" />
                <h3 className="title">Order Summary</h3>
                <div className="promocode">
                    {/* select box */}
                    Apply Coupon code / Promo Code
                    <img src={downarrow} alt="" />
                </div>
                <div className="ordersummary">
                    <img src={logo} alt="" />
                    <div className="amounts">
                        <div className="amtnames">
                            <p>Sub Total</p>
                            <p>Discount</p>
                            <p>Delivery Charges</p>
                            <p>Taxes</p>
                        </div>
                        <div className="amtvalues">
                            <p>₹{totalAmount.toFixed(2)}</p>
                            <p>₹{discount.toFixed(2)}</p>
                            <p>{deliveryCharges==0?"Free":deliveryCharges}</p>
                            <p>₹{taxes.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="totalamt">
                        <p className="amt">Total</p>
                        <p className="amtvalue">₹{finalAmount.toFixed(2)}</p>
                    </div>
                </div>
            </div>
                <img src={cartquadart} alt="Cart" className="cart-image" />
                <div className="checkout">
                    <span>Total({totalItems} items):₹{finalAmount}</span>
                    <button>Proceed to Checkout</button>
                </div>

        </div>
    );


};

export default Cart;
