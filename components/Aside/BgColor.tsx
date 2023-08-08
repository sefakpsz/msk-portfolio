import { twMerge } from "tailwind-merge"

interface BgColorProps {
    className?: string
}

const BgColor: React.FC<BgColorProps> = ({ className }) => {
    return (
        <div className={twMerge('relative h-full w-full blur-md', className)} >
            <div className='bg-[#516CF7] blur-[32px] w-[66px] h-[106px] rounded-[100px] opacity-[0.15] absolute -top-5'></div>
            <div className='bg-[#22C3F1] blur-[32px] w-[104px] h-[106px] rounded-[100px] opacity-[0.15] absolute -right-10 top-5'></div>
            <div className='bg-[#4AC06F] blur-[32px] w-[78px] h-[87px] rounded-[100px] opacity-[0.15] absolute top-[140px] right-5'></div>
            <div className='bg-[#516CF7] blur-[32px] w-[84px] h-[300px] rounded-[100px] opacity-[0.15] absolute top-[300px] -right-5'></div>
            <div className='bg-[#22C3F1] blur-[32px] w-[117px] h-[100px] rounded-[100px] opacity-[0.15] absolute bottom-[150px] -right-5'></div>
            <div className='bg-[#4AC06F] blur-[32px] w-[78px] h-[113px] rounded-[100px] opacity-[0.15] absolute bottom-[70px] left-2'></div>
            <div className='bg-[#9251F7] blur-[32px] w-[102px] h-[113px] rounded-[100px] opacity-[0.15] absolute bottom-[0px] -right-5'></div>
        </div>
    )
}

export default BgColor