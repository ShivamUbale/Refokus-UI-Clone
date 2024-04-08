import React from 'react';
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { motion } from 'framer-motion';

function Card({ width, start, para, head, hover = 'false' }) {
    return (
        <motion.div whileHover={{ backgroundColor: hover === 'true' ? '#7443FF' : '#3E3E46', paddingLeft: '28px', paddingRight: '28px' }} className={`${width} bg-zinc-800 rounded-2xl px-5 py-6 flex flex-col justify-between  `}>
            <div className='w-full'>
                <div className='w-full flex items-center justify-between'>
                    <h3 className='text-sm'>Get In Touch</h3>
                    <HiOutlineArrowLongRight className='w-4 h-4' />
                </div>

                {head ? <h1 className='text-3xl pt-5 font-medium tracking-tight w-3/5'>Insights and behind the scenes</h1> :
                    <h1 className='text-3xl pt-5 font-medium tracking-tight w-1/3'>Let's get to it, together.</h1>}
            </div>
            <div className='down mt-32'>
                {start &&
                    <>
                        <h1 className='text-[7rem] leading-none font-medium mb-5'>Start a Project</h1>
                        <button className='px-5 py-2 font-medium rounded-full border-[1px] border-white'>Contact us</button>
                    </>
                }
                {para && <p className='text-sm text-zinc-400'>Explore what drives our team.</p>}
            </div>
        </motion.div>
    );
}

export default Card;