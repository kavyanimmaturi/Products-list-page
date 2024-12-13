import React from 'react'
import ProductsList from '../ProductsList/ProductsList'
import "./FiltersGroup.css"

const FiltersGroup = () => {
    return (
        <div>
            <div className='filters-group-cont'>
                <div className='custom-cont'>
                    <input type='checkbox' className='check-box' />
                    <h1 className="custom-title">CUSTOMIZABLE</h1>
                </div>
            </div>
            <hr className="line" />
            <div className="ideal-cont">
                <div>
                    <select className='select-cont'>
                        <option className='ideal-title'>IDEAL FOR</option>
                        <option>Men</option>
                        <option>Women</option>
                        <option>Baby & Kids</option>
                    </select>
                    <p className='all'>All</p>
                </div>
            </div>
            <hr className='line-separate' />
            <div className="occasion-cont">
                <p className="occasion-title">OCCASSION</p>
                <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1733977480/arrow-left_fknlju.jpg" alt="arrow" className="left-arrow" />
            </div>
            <p className='occasion-all'>All</p>
            <hr className='line-separate' />
         
            <div className="occasion-cont">
                <p className="occasion-title">WORK</p>
                <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1733977480/arrow-left_fknlju.jpg" alt="arrow" className="left-arrow" />
            </div>
            <p className='occasion-all'>All</p>
            <hr className='line-separate' />

            <div className="occasion-cont">
                <p className="occasion-title">FABRIC</p>
                <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1733977480/arrow-left_fknlju.jpg" alt="arrow" className="left-arrow" />
            </div>
            <p className='occasion-all'>All</p>
            <hr className='line-separate' />

            <div className="occasion-cont">
                <p className="occasion-title">SEGMENT</p>
                <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1733977480/arrow-left_fknlju.jpg" alt="arrow" className="left-arrow" />
            </div>
            <p className='occasion-all'>All</p>
            <hr className='line-separate' />

            <div className="occasion-cont">
                <p className="occasion-title">SUITABLE FOR</p>
                <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1733977480/arrow-left_fknlju.jpg" alt="arrow" className="left-arrow" />
            </div>
            <p className='occasion-all'>All</p>
            <hr className='line-separate' />

            <div className="occasion-cont">
                <p className="occasion-title">RAW MATERIALS</p>
                <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1733977480/arrow-left_fknlju.jpg" alt="arrow" className="left-arrow" />
            </div>
            <p className='occasion-all'>All</p>
            <hr className='line-separate' />

            <div className="occasion-cont">
                <p className="occasion-title">PATTERN</p>
                <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1733977480/arrow-left_fknlju.jpg" alt="arrow" className="left-arrow" />
            </div>
            <p className='occasion-all'>All</p>
            <hr className='line-separate' />
            <div className='filter-and-products'>
                <ProductsList/>
             </div>
        </div>

    )
}

export default FiltersGroup
