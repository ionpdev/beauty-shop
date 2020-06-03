import React from 'react'

import './homepage.styles.scss'

const HomePage = () => {
    return (
        <div className='homepage'>
            <h1>Welcome To my Beauty Shop</h1>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>BATH & SHOWER</div>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>FACE</div>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>BODY</div>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>HAIR</div>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'>GIFTS</div>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
            </div>       
        </div>
    )
        
}

export default HomePage
