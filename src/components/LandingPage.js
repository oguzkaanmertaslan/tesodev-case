import React from 'react'

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <div className='landing-page-top'>
                <div className='add-button-area'>
                    <button className='add-button'>Add new record</button>
                </div>
            </div>

            <div className='landing-page-main'>
                <div className='logo-area'>
                    <div className='logo-img-area'>
                        <div className='logo' />
                    </div>
                    <div className='search-text'>
                        Search App
                    </div>
                </div>
            </div>

            <div className='search-area'>
                <div className='search-title'>
                    Find in records
                </div>
                <div className='search-input-area'>
                        <input className='search-input' />
                        <button className='search-button'>Search</button>
                </div>
            </div>
            {/* ARAMA SONUÇLARI YAZILACAK */}

            
        </div>
    )
}

export default LandingPage