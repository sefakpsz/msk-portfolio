import { twMerge } from 'tailwind-merge'

interface VerticalListProps {
    className?: string
    title?: string
    company?: string
    icon?: string
    date?: string
    location?: string
}

const VerticalList: React.FC<VerticalListProps> = ({ className }) => {
    return (
        <div className={twMerge('', className)}></div>
    )
}

export default VerticalList