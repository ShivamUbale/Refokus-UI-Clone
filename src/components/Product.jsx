import React from 'react';
import Button from './Button';

function Product({val, mover, count}) {
    return (
        <div className='w-full h-[15rem] py-[2.5rem] mb-20'>
            <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
            <h1 className='text-5xl capitalize font-medium'>{val.title}</h1>
            <div className='details w-[30%]'>
                <p className='mb-4 text-lg'>{val.description}</p>
                <div className='flex gap-5 item-center'>
                    {val.live && <Button val={'Live Website'}/>}
                    {val.case && <Button val={'Case Study'}/>}
                </div>
                
            </div>
            </div>
        </div>
    );
}

export default Product;