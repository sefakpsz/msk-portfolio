import { twMerge } from 'tailwind-merge'
import MainItem from './MainItem'
import mainLists from './MainList.constants'
import MainItemList from './MainItemList'

interface MainProps {
    className?: string
}

const Main: React.FC<MainProps> = ({ className }) => {
    return (
        <div className={twMerge('bg-[#232339]', className)}>
            <ul className='relative border-l border-gray-200 dark:border-gray-700 mt-10 ml-10'>
                {
                    Object.keys(mainLists).map((item) => {
                        return <MainItemList key={item} title={item} />
                    })
                }
            </ul>
        </div>
    )
}

export default Main