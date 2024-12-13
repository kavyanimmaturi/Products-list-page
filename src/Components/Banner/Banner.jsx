import React from 'react'
import ProductsPage from '../ProductsPage/ProductsPage'
import "./Banner.css"


const Banner = () => {
    return (
        <div>
            <div className='banner-cont'>
                <h1 className="banner-title">DISCOVER OUR PRODUCTS</h1>
                <p className="description">Let's explore all the different products available and also filter products according to that categories.Product prices from high to low and low to high are available.Popular products are also seen.</p>
            </div>
            <hr className="separator-line" />

            <div className="items-list-cont">
                <h1 className="items-count">3425 ITEMS</h1>
                <div className="filters-cont">
                    <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1733984576/arrow-left_gflfuz.png" alt="arrow" className="left-arrow" />
                    <a href className="filter-title">HIDE FILTER</a>
                </div>
                <div className="recommend-cont">
                <select>
                <option selected>RECOMMENDED</option>
                <option>NEWEST FIRST</option>
                <option>POPULAR</option>
                <option>PRICE: HIGH TO LOW</option>
                <option>PRICE: LOW TO HIGH</option>
                </select>
                </div>
            </div>
            <hr className="horizontal-line" />
            <ProductsPage/>
        </div>
        


    )
}

export default Banner
