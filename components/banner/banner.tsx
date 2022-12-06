import React from 'react';

export default function HeroBanner() {
    return (
        <div className='m-5 text-center bg-image banner-img center'>
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='text-white'>
                        <h1 className='mb-3'>Cell Now</h1>
                        <h4 className='mb-3'>Sell your iphones here...</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
