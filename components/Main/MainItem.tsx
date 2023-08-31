import MainItemListItem from './MainItemListItem'

interface MainItemProps {
    title: string
}

const MainItem: React.FC<MainItemProps> = ({ title }) => {
    return (
        <li className='mb-10 ml-6'>
            <span className="absolute flex items-center justify-center w-2.5 h-2.5 bg-purple-400 rounded-full -left-[5px] ring-[10px] ring-gray-500 ring-opacity-25"></span>
            <div className='relative ml-4 -top-2 text-lg font-light'>{title}</div>
            <MainItemListItem title={title} vertical={true} />
        </li>
    )
}

export default MainItem