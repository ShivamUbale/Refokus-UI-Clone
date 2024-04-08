import React from 'react';
import { motion } from 'framer-motion';

function Marquee({ imageUrls, direction }) {
    console.log(direction);
    return (
        <div className='flex w-full overflow-hidden'>
            <motion.div initial={{ x: direction==='left' ? '0%': '-100%'}} animate={{ x: direction==='left' ? '-100%': '0%'}} transition={{ease: 'linear', duration:'36', repeat:Infinity}} className='py-8 pr-40 flex flex-shrink-0 gap-32 '>
                {imageUrls.map((urls, i) => <img className='w-[7rem] h-[1.9rem]' key={i} src={urls} />)}
            </motion.div>
            <motion.div initial={{ x: direction==='right' ? '-100%': '0%'}} animate={{ x:direction==='right' ? '0%': '-100%'}} transition={{ease: 'linear', duration:'36', repeat:Infinity}}  className='py-8 pr-40 flex flex-shrink-0 gap-32 '>
                {imageUrls.map((urls, i) => <img className='w-[7rem] h-[1.9rem]' key={i} src={urls} />)}
            </motion.div>
        </div>
    );
}

export default Marquee;