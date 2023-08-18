import { twMerge } from 'tailwind-merge'
import MainItem from './MainItem'

interface MainProps {
    className?: string
}

const Main: React.FC<MainProps> = ({ className }) => {
    return (
        <div className={twMerge('bg-[#232339]', className)}>
            <ul className='relative border-l border-gray-200 dark:border-gray-700 mt-10 ml-10'>
                <MainItem title='Experience' />
                <MainItem title='Skills' />
                <MainItem title='Education' />
                <MainItem title='Latest Projects' />
                <MainItem title='Tools' />
            </ul>
        </div>
    )
}

export default Main