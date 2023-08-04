import { twMerge } from 'tailwind-merge'

interface AsideInfoProps {
    className?: string
}

const AsideInfo: React.FC<AsideInfoProps> = ({ className }) => {
    return (
        <div className={twMerge('relative flex flex-col justify-center items-center h-[300px] p-8', className)}>
            <div className='mb-4'>PHOTO OF DEV</div>

            <div className='flex text-start flex-col gap-1 mb-12'>
                <p className='text-blue-900 text-opacity-80 text-3xl font-mono font-extrabold'>MSK</p>
                <p className='text-lg font-bold font-sans '>Fullstack Software Developer</p>
            </div>

            <span className='bg-gradient-to-r from-purple-600 via-purple-400 to-purple-300 w-[80%] h-[1px]'></span>

        </div>
    )
}

export default AsideInfo