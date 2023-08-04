import { twMerge } from 'tailwind-merge'
import AsideInfo from './AsideInfo'
import BgColor from './BgColor'

interface AsideProps {
    className?: string
}

const Aside: React.FC<AsideProps> = ({ className }) => {
    return (
        <div className={twMerge('bg-[#232339] h-full relative overflow-hidden', className)}>
            <AsideInfo className='absolute' />
            <BgColor />
        </div>
    )
}

export default Aside