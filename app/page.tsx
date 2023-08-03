import Aside from '@/components/Aside/Aside'
import Main from '@/components/Main/Main'

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-2 p-2 h-full">
      <Aside className='col-span-2' />
      <Main className='col-span-10' />
    </div>
  )
}
