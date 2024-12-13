import React from 'react'
import "./FooterSection.css"
const FooterSection = () => {
    return (
        <div>
            <div className='footer'>
                <div className="footer-content">
                    <div className="sign-and-contact">
                        <div className='sign-in-cont'>
                            <h1 className='text'>BE THE FIRST TO KNOW</h1>
                            <p className='para'>Sign up for more updates from metta muse.</p>
                            <div className='mail-box'>
                                <input type='text' placeholder='Enter your e-mail..' className='input-box'></input>
                                <button type='submit' className='button'>Subscribe</button>
                            </div>
                        </div>
                        <div className="contact-details">
                            <h1 className="contact-title">CONTACT US</h1>
                            <p className="contact-num">+44 221 133 5360</p>
                            <p className="contact-email">customercare@mettamuse.com</p>
                            <br />
                            <h1 className='currency'>CURRENCY</h1>
                            <div className="currency-details">
                                <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1734057767/United_States_of_America_US_r3hjdm.png" alt="country-logo" className="country-img" />
                                <li className='usd'>USD</li>
                            </div>
                            <p className="description">Transactions will be completed in Euros and a currency reference is available on hover.</p>

                        </div>
                    </div>
                </div>
                <hr className='horiz-line' />

                <div className='links-follow-cont'>
                    <div className='about-us-cont'>
                        <h1 className='meta'>metta muse</h1>
                        <p>about us</p>
                        <p>Stories</p>
                        <p>Artisans</p>
                        <p>Boutiques</p>
                        <p>Contact Us</p>
                        <p>EU Complicanes Docs </p>
                    </div>
                    <div className='about-us-cont'>
                        <h1 className='meta'>Quick Links</h1>
                        <p>Orders & Shipping</p>
                        <p>Join/Login as seller</p>
                        <p>Payment & Pricing</p>
                        <p>Return & Refunds</p>
                        <p>FAQs</p>
                        <p>Privacy Policy </p>
                        <p>Terms & Conditions</p>
                    </div>

                    <div className='follow-us'>
                        <h1 className='follow'>FOLLOW US</h1>
                        <div className="follow-img">
                            <img src='https://res.cloudinary.com/dtv22dsxc/image/upload/v1734058412/Insta_d6bjbv.png' alt="insta" className='img'/>
                            <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1734058420/mdi_linkedin_ta8nj4.png" alt="linkedin" className='img' />
                        </div>
                        <div className='cards'>
                            <h1 className="card-name">metta muse ACCEPTS</h1>
                            <div className="card-img">
                            <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1734058362/Group_136188_nimvkg.jpg" alt="" />
                            <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1734058342/Group_136190_dzydt3.png" alt="" />
                            <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1734058350/Group_136192_g7bo2a.png" alt="" />
                            <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1734058387/Group_136193_c16ckv.png" alt="" />
                            <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1734058379/Group_136194_gujb7b.png" alt="" />
                            <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1734058370/Group_136195_ky23q2.png" alt="" />
                            </div>
                        </div>
                    </div>
                   
                </div>
                <p>Copyright © 2023 mettamuse.All Rights Reserved.</p>
            </div>
            
        </div>
    )
}

export default FooterSection
