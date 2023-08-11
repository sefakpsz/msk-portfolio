import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

interface AsideInfoProps {
    className?: string
}

const AsideInfo: React.FC<AsideInfoProps> = ({ className }) => {
    return (
        <div className={twMerge('flex flex-col justify-center h-[300px] mt-10 mb-8', className)}>
            <div className='mb-3 relative h-[140px] w-[270px]'>
                <Image src='/../public/from_figma.jpeg' className='object-cover rounded-md' fill alt="Logo" />
            </div>

            <div className='flex relative text-start flex-col gap-2 pl-8 pr-8 mt-2'>
                <p className='text-2xl font-medium'>Mr. Doorless</p>
                <p className='bg-gradient-to-r from-purple-500 via-purple-300 to-purple-200 text-transparent bg-clip-text font-semibold opacity-60'>Software Developer</p>
                <div className='mt-2 text-xs font-light'>
                    <p className='text-sm font-medium'>&quot;People ignore design that <br /> ignore people.&quot;</p>
                    <p className='font-thin text-xs'>Frank Kimero</p>
                </div>
            </div>
        </div>
    )
}

export default AsideInfo