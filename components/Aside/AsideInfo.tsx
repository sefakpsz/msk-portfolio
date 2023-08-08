import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

interface AsideInfoProps {
    className?: string
}

const AsideInfo: React.FC<AsideInfoProps> = ({ className }) => {
    return (
        <div className={twMerge('relative flex flex-col justify-center items-center h-[300px] pr-8 pl-8', className)}>
            <div className='mb-3'>
                <Image src='/../public/msk.jpeg' className='rounded-md' width={150} height={80} alt="Logo" />
            </div>

            <div className='flex text-start flex-col gap-2'>
                <p className='text-opacity-40 text-xl font-semibold'>Mr. Doorless</p>
                <p className='bg-gradient-to-r from-purple-500 via-purple-300 to-purple-200 text-transparent bg-clip-text text-lg opacity-60 font-bold font-sans'>Software Developer</p>
            </div>
        </div>
    )
}

export default AsideInfo