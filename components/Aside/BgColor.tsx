import { twMerge } from "tailwind-merge"

interface BgColorProps {
    className?: string
}

const BgColor: React.FC<BgColorProps> = ({ className }) => {
    return (
        <div className={twMerge('blur-[20px]', className)} >
            <div className='bg-[#516CF7] blur-[32px] w-[80px] h-[106px] rounded-[100px] opacity-[0.15] absolute -top-5'></div>
            <div className='bg-[#22C3F1] blur-[32px] w-[104px] h-[106px] rounded-[100px] opacity-[0.15] absolute -right-10 top-5'></div>
            <div className='bg-[#4AC06F] blur-[32px] w-[78px] h-[87px] rounded-[100px] opacity-[0.15] absolute top-[140px] right-5'></div>
            <div className='bg-[#516CF7] blur-[32px] w-[84px] h-[300px] rounded-[100px] opacity-[0.15] absolute top-[300px] -right-5'></div>
            <div className='bg-[#22C3F1] blur-[32px] w-[140px] h-[130px] rounded-[100px] opacity-[0.15] absolute bottom-[150px] right-5'></div>
            <div className='bg-[#4AC06F] blur-[32px] w-[130px] h-[160px] rounded-[100px] opacity-[0.15] absolute bottom-[60px] left-6'></div>
            <div className='bg-[#9251F7] blur-[32px] w-[110px] h-[120px] rounded-[100px] opacity-[0.15] absolute bottom-[0px] right-1'></div>
        </div>
    )
}

export default BgColor