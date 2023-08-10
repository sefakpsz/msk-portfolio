import Image from 'next/image'
import { twMerge } from "tailwind-merge"

interface AsideItemProps {
    className?: string,
    contents: [{
        imageSource: string,
        title: string,
        description: string
    }]
}

const AsideItem: React.FC<AsideItemProps> = ({ className, contents }) => {
    return (
        <div>
            {contents.map(content => (
                (
                    <div key={content.title} className={twMerge('flex justify-center my-1', className)}>
                        <hr className='bg-white opacity-20 w-[200px] h-[1px]'></hr>

                        <Image src={content.imageSource} fill={true} alt='logo' />

                        <div className='flex items-start'>
                            <p className='text-xs'>{content.title}</p>
                            <p className='font-semibold'>{content.description}</p>
                        </div>
                    </div>
                )
            ))}
        </div>
    )
}

export default AsideItem