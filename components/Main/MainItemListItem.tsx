import { twMerge } from 'tailwind-merge'

interface MainItemListItemProps {
    className?: string
    title?: string
    company?: string
    icon?: string
    date?: string
    location?: string
    vertical: boolean
}

const MainItemListItem: React.FC<MainItemListItemProps> = ({ className, title, vertical }) => {
    const firslast = vertical ? 'first:rounded-t-lg first:mt-0 last:rounded-b-lg' : ' first:rounded-t-lg first:mt-0 last:rounded-b-lg'

    return (
        <li className={twMerge(`inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium ${firslast} bg-white border text-gray-800 -mt-px dark:bg-gray-800 dark:border-gray-700 dark:text-white`, className)}>
            {title}
        </li>
    )
}

export default MainItemListItem