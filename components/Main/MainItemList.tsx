import { twMerge } from 'tailwind-merge'
import MainItemListItem from './MainItemListItem'
import { MainItemList } from './MainList.constants'

interface MainListProps {
    className?: string
    title: string
    mainItemList?: Array<MainItemList>
    vertical?: boolean
}

const MainItemList: React.FC<MainListProps> = ({ className, title, mainItemList, vertical }) => {
    const flex = vertical ? 'flex-col' : ''

    return (
        <div>
            {/* <ul className={twMerge(`max-w-xs flex ${flex} gap-2`, className)}> */}
            {/* TODO: Container class */}
            {/* TODO: List Map */}
            {/* <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"> */}
            {/* TODO: List class */}
            {/* TODO: JSX */}
            {/* </li> */}
            {/* <MainItemListItem vertical={true} title={''} />
            </ul> */}
            <p>{title[0].toUpperCase() + title.slice(1)}</p>
        </div>
    )
}

export default MainItemList