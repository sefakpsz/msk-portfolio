import { twMerge } from "tailwind-merge"

interface AsideItemProps {
    className?: string
}

const AsideItem: React.FC<AsideItemProps> = ({ className }) => {
    return (
        <div className={twMerge('flex justify-center my-1', className)}>
            <hr className='bg-white opacity-20 w-[200px] h-[1px]'></hr>
        </div>
    )
}

export default AsideItem