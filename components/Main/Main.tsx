import { twMerge } from 'tailwind-merge'

interface MainProps {
    className?: string
}

const Main: React.FC<MainProps> = ({ className }) => {
    return (
        <div className={twMerge('bg-[#232339]', className)}>

        </div>
    )
}

export default Main