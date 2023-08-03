import { twMerge } from 'tailwind-merge'

interface MainProps {
    className?: string
}

const Main: React.FC<MainProps> = ({ className }) => {
    return (
        <div
            className={twMerge('bg-blue-800 rounded-md', className)}
        >
            <p className='p-2 flex justify-center font-semibold text-black'>
                Main
            </p>
        </div>
    )
}

export default Main