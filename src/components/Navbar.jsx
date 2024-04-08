import React from 'react';
import Button from './Button';

function Navbar() {
    return (
        <div className='max-w-screen-xl mx-auto px-2 py-4 lg:px-0 lg:py-6 flex justify-between border-b-[1px] border-zinc-700'>
            <div className="nleft flex items-center ">
                <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                <div className="invisible lg:visible links flex gap-16 ml-20">
                    {['Home', 'Work', '', 'News'].map((elem, index) => elem.length === 0 ? <span key={index} className='w-[1px] h-5 bg-zinc-500'></span> : (
                        <a key={index} className='text-sm relative' href='#'>
                            {index === 1 && <span style={{ boxShadow: '0 0 0.25em #00FF19' }} className='inline-block  w-1 h-1 absolute right-9 top-2 rounded-full bg-green-500'></span>}
                            {elem}
                        </a>
                    )
                    )}
                </div>
            </div>
            <Button val={'Start a Project'}/>
        </div>
    );
}

export default Navbar;