import React from 'react';

function Footer() {
    return (
        <div className='w-full'>
            <div className='max-w-screen-xl mx-auto py-10 flex gap-28'>
                <div className="basis-1/2">
                    <h1 className='text-[13rem] font-medium leading-none tracking-tight'>
                        refokus.
                    </h1></div>
                <div className="basis-1/2 flex gap-6">
                    <div className='basis-1/4'>
                        <h4 className='mb-16 mt-4 text-zinc-500'>Socials</h4>
                        {['Instagram', 'Twitter (X?)', 'LinkedIn'].map((linkName, i) => <a key={i} className='flex mt-2 text-zinc-600 ' href='#'>{linkName}</a>)}
                    </div>
                
                    <div className='basis-1/4'>
                        <h4 className='mb-12 mt-4 text-zinc-500'>Sitemap</h4>
                        {['Home', 'Work', 'Careers', 'Contact'].map((linkName, i) => <a key={i} className='flex mt-2 text-zinc-600' href='#'>{linkName}</a>)}
                    </div>
                    <div className='basis-1/2 flex flex-col items-end justify-end'>
                        <p className='text-right'>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
                        <button className='bg-blue-600 text-sm px-2 py-2 mt-6'><i>W  </i>Enterprise Partner</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;