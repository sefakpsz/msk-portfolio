import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

interface AsideInfoProps {
    className?: string
}

const AsideInfo: React.FC<AsideInfoProps> = ({ className }) => {
    return (
        <div className={twMerge('relative flex flex-col justify-center items-center h-[400px] pr-8 pl-8', className)}>
            <div className='mb-4'>
                <Image src='/../public/msk.jpeg' width={200} height={200} alt="Logo" />
            </div>

            <div className='flex text-start flex-col gap-1 mb-12'>
                <p className='text-blue-900 text-opacity-80 text-3xl font-mono font-extrabold'>MSK</p>
                <p className='text-lg font-bold font-sans '>Fullstack Software Developer</p>
            </div>

            <span className='bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 w-[80%] h-[1px]'></span>

        </div>
    )
}

export default AsideInfo