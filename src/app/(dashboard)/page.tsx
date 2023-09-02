import { Skeleton } from '@/components/ui/skeleton'
import { wait } from '@/lib/wait'
import { currentUser } from '@clerk/nextjs'
import { Suspense } from 'react'

export default async function Home() {
  return (
    <Suspense fallback={<WelcomeMsgFallback />}>
      <Welcome />
    </Suspense>
  )
}

async function Welcome() {
  const user = await currentUser()
  await wait(3000)

  if (!user) {
    return <div>error</div>
  }
  return (
    <div className='flex w-full'>
      <h1 className='text-4xl font-bold'>
        Welcome, <br /> {user.firstName}
      </h1>
    </div>
  )
}

function WelcomeMsgFallback() {
  return (
    <div className='flex w-full'>
      <h1 className='text-4xl font-bold'>
        <Skeleton className='w-[150px] h-[36px]' />
        <Skeleton className='w-[150px] h-[36px]' />
      </h1>
    </div>
  )
}