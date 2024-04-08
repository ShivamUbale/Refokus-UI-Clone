import { BsArrowReturnRight } from "react-icons/bs";

function Button({val}) {
    return (
        <a className='w-fit px-5 py-1.5  text-md rounded-full bg-white text-black flex items-center justify-between gap-2'>
            <span className='text-[0.95em]'>{val}</span>
            <BsArrowReturnRight className='w-3 h-3 mt-1 ' />
        </a>
    );
}

export default Button;