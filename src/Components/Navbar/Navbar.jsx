import React from 'react'
import Banner from '../Banner/Banner'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <div className='navbar-cont'>
                <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1733932591/Logo_qml0za.jpg" className='nav-logo' alt="logo" />
                <div className="nav-title">
                    <h1 className='heading'>LOGO</h1>
                </div>
                <div className='nav-menu-right'>
                    <img src='https://res.cloudinary.com/dtv22dsxc/image/upload/v1733975748/search-normal_wwydcn.jpg' alt="search-logo" className='logo' />
                    <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1733975772/heart_fjva1y.jpg" alt="" className='logo' />
                    <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1733975755/shopping-bag_qxqul8.jpg" alt="" className='logo' />
                    <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1733975764/profile_hqljai.jpg" alt="" className='logo' />
                    <p className='language'>ENG</p>
                    <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1733977480/arrow-left_fknlju.jpg" alt="arrow" className='arrow' />
                </div>
            </div>
            <ul className="nav-items-list">
                <li>SHOP</li>
                <li>SKILLS</li>
                <li>STORIES</li>
                <li>ABOUT</li>
                <li>CONTACT US</li>
            </ul>
            <hr className="separator" />
            <Banner/>
        </div>
        
    )
}
export default Navbar
