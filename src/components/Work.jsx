import React, { useState } from 'react';
import { motion, useScroll } from "framer-motion";


function Work() {

    const [images, setImages] = useState(
        [
            { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png', top: '56%', left: '50%', isActive: false },
            { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png', top: '60%', left: '47%', isActive: false },
            { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png', top: '50%', left: '53%', isActive: false },
            { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png', top: '62%', left: '50%', isActive: false },
            { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png', top: '56.5%', left: '54%', isActive: false },
            { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png', top: '54%', left: '48.5%', isActive: false }
        ]

    );




    const { scrollYProgress } = useScroll();

    scrollYProgress.on('change', (data) => {

        const showImages = (arr) => {
            setImages((prev) =>
            prev.map((img, index) => 
                arr.indexOf(index) === -1 ? {...img, isActive: false} : {...img, isActive: true},
            )
        );
        }


        switch (Math.floor(data*100)) {
            case 0:
                showImages([]);
                break;
            case 1:
                showImages([0]);
                break;
            case 2:
                showImages([0, 1]);
                break;
            case 3:
                showImages([0, 1, 2]);
                break;
            case 4:
                showImages([0, 1, 2, 3]);
                break;
            case 5:
                showImages([0, 1, 2, 3, 4]);
                break;
            case 5.5:
                showImages([0, 1, 2, 3, 4]);
                break;
            case 6:
                showImages([0, 1, 2, 3, 4, 5]);
                break;
            default:
                break;
        }
    })


    return (
        <div className='w-full'>
            <div className='max-w-screen-xl mx-auto text-center '>
                <h1 className='rotate-[-90deg] mt-32 lg:mt-0 lg:rotate-0 text-[37vw] font-medium leading-none select-none'>work</h1>
                <div className='absolute top-0 left-0 w-full h-full'>
                    {images.map((elem, index) =>
                        elem.isActive && (
                            <img key={index} src={elem.url} className='absolute w-72 h-72 rounded-xl -translate-x-[50%] -translate-y-[50%]' style={{ top: elem.top, left: elem.left }} alt="" />
                        ))}
                </div>
                <h3 className='text-lg text-[#919191] leading-none mb-28'>Web Design, Webflow Development, Creative Development</h3>
            </div>
        </div>
    );
}

export default Work; 