import React from 'react';
import Card from './Card';

function Cards() {
    return (
        <div className='w-full mb-8'>
            <div className='max-w-screen-xl mx-auto flex gap-1'>
                <Card width={'basis-2/5'} start={false} para={true} head={true}/>
                <Card width={'basis-2/3'} start={true} para={false} head={false} hover='true' />
            </div>
        </div>
    );
}

export default Cards;