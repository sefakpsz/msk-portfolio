import { AsideItem } from './Aside.constants'
import { Icon } from '@iconify/react'
import { twMerge } from "tailwind-merge"

export interface AsideItemProps {
    className?: string
    contents: AsideItem[]
    title: string
}

const AsideItem: React.FC<AsideItemProps> = ({ className, contents, title }) => {
    return (
        <div>
            <hr className='bg-white opacity-20 w-[180px] h-[1px] mb-4 ml-14'></hr>
            <div className='flex flex-col items-start mb-8 mx-8'>
                <p className='opacity-50'>{title[0].toUpperCase() + title.slice(1)}</p>
                {contents.map(content => (
                    (
                        <div key={content.title} className={twMerge('flex flex-row justify-center items-center gap-2 mt-4', className)}>
                            {/* <Icon icon="tabler:building-estate" /> */}iconify

                            <div className='flex items-start flex-col -mt-2'>
                                <p className='flex'>{content.title}</p>
                                <p className='font-light'>{content.description}</p>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    )
}

export default AsideItem