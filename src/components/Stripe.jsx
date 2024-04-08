

function Stripe({val}) {
    
    return (
        <div className='w-80 p-6 flex items-center justify-between border-y-[1px] border-r-[1px] border-[#919191]'>
            <img src={val.url} alt="" />
            <span>{val.number}</span>
        </div>
    );
}

export default Stripe;