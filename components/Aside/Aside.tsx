import { twMerge } from 'tailwind-merge'

interface AsideProps {
    className?: string
}

const Aside: React.FC<AsideProps> = ({ className }) => {
    return (
        <div className={twMerge('bg-yellow-500 rounded-md h-full', className)}>
            <p className='p-2 flex justify-center font-semibold text-black'>
                Aside
            </p>
        </div>
    )
}

export default Aside